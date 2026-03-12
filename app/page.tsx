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
            <h1
              className="font-heading text-4xl font-extrabold tracking-tight leading-none"
              style={{
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-titulo-zao)'
              }}
            >
              mulinco
            </h1>
            <p
              className="font-mono text-sm"
              style={{
                color: 'var(--text-muted)',
              }}
            >
              Maria Rodrigues
            </p>
          </div>

          <p
            className="font-mono text-sm max-w-xs leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            Aqui estão todos os meus links ✦
          </p>
        </div>

        <section className="flex flex-col gap-2">
          <p className="font-mono section-label px-1 mb-1">redes sociais</p>
          {socialLinks.map((link) => (
            <SocialCard key={link.id} link={link} />
          ))}
        </section>

        <section className="flex flex-col gap-2">
          <p className="font-mono section-label px-1 mb-1">projetos</p>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>

        <section className="flex flex-col gap-2">
          <p className="font-mono section-label px-1 mb-1">contato</p>
          <a
            href="mailto:mulincorod@gmail.com"
            className="link-card flex items-center gap-4 px-5 py-4 group w-full"
            style={{ animationDelay: '640ms' }}
          >
            <span
              className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)' }}
            >
              <span className="group-hover:[color:var(--accent)] transition-colors duration-200">
                <MailIcon />
              </span>
            </span>
            <div className="flex-1">
              <p
                className="font-heading font-semibold text-sm"
                style={{ color: 'var(--text-primary)' }}
              >
                E-mail
              </p>
              <p
                className="font-mono text-xs mt-0.5"
                style={{ color: 'var(--text-muted)' }}
              >
                mulincorod@gmail.com
              </p>
            </div>
            <span
              className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ color: 'var(--accent)' }}
            >
              <ExternalLinkIcon />
            </span>
          </a>
        </section>

        <footer
          className="text-center pb-4"
          style={{ animationDelay: '720ms', animation: 'fadeUp 0.5s ease both' }}
        >
          <p
            className="font-mono text-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            © {new Date().getFullYear()} mulinco
          </p>
        </footer>

      </div>
    </main>
    </>
  )
}

