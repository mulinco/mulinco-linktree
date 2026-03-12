"use client"

import { useState, useEffect, useRef } from 'react'
import AnimatedBackground from './components/AnimatedBackground'
import Avatar from './components/Avatar'
import SocialCard from './components/SocialCard'
import ProjectCard from './components/ProjectCard'
import { MailIcon, ExternalLinkIcon } from './components/Icons'

import { socialLinks, projects } from './data/links'

export default function Home() {
  const [isKawaii, setIsKawaii] = useState(false)
  const isManualOverride = useRef(false)

  useEffect(() => {
    const updateThemeByTime = () => {
      if (isManualOverride.current) return
      
      const currentHour = new Date().getHours()
      if (currentHour >= 6 && currentHour < 18) {
        setIsKawaii(true)
      } else {
        setIsKawaii(false)
      }
    }

    updateThemeByTime()
    
    const interval = setInterval(updateThemeByTime, 60000)
    return () => clearInterval(interval)
  }, [])

  const toggleThemeSecretly = () => {
    isManualOverride.current = true
    setIsKawaii(prev => !prev)
  }

  useEffect(() => {
    if (isKawaii) {
      document.body.classList.add('kawaii')
    } else {
      document.body.classList.remove('kawaii')
    }
  }, [isKawaii])

  return (
    <>
      <AnimatedBackground isKawaii={isKawaii} />
      <main
        className="relative min-h-screen flex flex-col items-center justify-start py-16 px-4"
        style={{ zIndex: 1 }}
      >
      <div className="w-full max-w-md flex flex-col gap-8">

        <div
          className="flex flex-col items-center text-center gap-4"
          style={{ animation: 'fadeUp 0.6s ease both' }}
        >
          <Avatar isKawaii={isKawaii} onDoubleClick={toggleThemeSecretly} />

          <div className="flex flex-col items-center gap-1">
            <h1 className="font-titulo-zao text-4xl font-extrabold tracking-[-0.02em] leading-none text-text-primary">
              mulinco
            </h1>
            <p className="font-mono text-sm text-text-muted">
              Maria Rodrigues
            </p>
          </div>

          <p className="font-mono text-sm max-w-xs leading-relaxed text-text-muted">
            Aqui estão todos os meus links ✦
          </p>
        </div>

        <section className="flex flex-col gap-2">
          <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-red px-1 mb-1">redes sociais</p>
          {socialLinks.map((link) => (
            <SocialCard key={link.id} link={link} />
          ))}
        </section>

        <section className="flex flex-col gap-2">
          <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-red px-1 mb-1">projetos</p>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>

        <section className="flex flex-col gap-2">
          <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-red px-1 mb-1">contato</p>
          <a
            href="mailto:mulincorod@gmail.com"
            aria-label="Enviar e-mail para mulincorod@gmail.com"
            className="group relative flex items-center gap-4 px-5 py-4 w-full overflow-hidden backdrop-blur-sm transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] animate-fadeUp
              goth:bg-surface goth:border goth:border-border goth:rounded-md
              goth:hover:border-border-hover goth:hover:bg-surface-hover goth:hover:-translate-y-[2px] goth:hover:shadow-[0_6px_28px_rgba(160,0,20,0.22),_0_0_0_1px_rgba(224,0,32,0.18)]
              kawaii:bg-white/60 kawaii:border-2 kawaii:border-transparent kawaii:rounded-[30px] kawaii:shadow-[0_4px_15px_rgba(216,100,135,0.1)] kawaii:backdrop-blur-md
              kawaii:hover:-translate-y-[3px] kawaii:hover:scale-[1.02] kawaii:hover:border-[rgba(216,100,135,0.5)] kawaii:hover:bg-white/90 kawaii:hover:shadow-[0_8px_25px_rgba(216,100,135,0.25)]
              active:translate-y-0"
            style={{ animationDelay: '640ms' }}
          >
            {/* Before overlay (gradient border animation) */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none" />
            {/* After overlay (corner gradient glow) */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-dim to-transparent to-[55%] opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none" />

            <span
              className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200 bg-[rgba(255,255,255,0.04)] text-text-muted group-hover:text-accent z-10"
            >
              <span>
                <MailIcon />
              </span>
            </span>
            <div className="flex-1 z-10">
              <p className="font-heading font-semibold text-sm text-text-primary">
                E-mail
              </p>
              <p className="font-mono text-xs mt-0.5 text-text-muted">
                mulincorod@gmail.com
              </p>
            </div>
            <span className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-accent z-10">
              <ExternalLinkIcon />
            </span>
          </a>
        </section>

        <footer className="text-center pb-4 animate-fadeUp animation-delay-700" style={{ animationDelay: '720ms' }}>
          <p className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} mulinco
          </p>
        </footer>

      </div>
    </main>
    </>
  )
}

