"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import AnimatedBackground from './components/AnimatedBackground'

interface SocialLink {
  id: string
  label: string
  username: string
  url: string
  icon: React.ReactNode
  delay: number
}

interface ProjectLink {
  id: string
  label: string
  description: string
  url: string
  tag: string
  delay: number
  icon: React.ReactNode
}

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
)

const LastFmIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10.584 17.21l-.88-2.392s-1.43 1.595-3.573 1.595c-1.897 0-3.245-1.651-3.245-4.296 0-3.382 1.704-4.597 3.382-4.597 2.41 0 3.18 1.56 3.84 3.573l.88 2.75c.88 2.666 2.53 4.81 7.294 4.81 3.41 0 5.718-1.045 5.718-3.793 0-2.22-1.264-3.37-3.619-3.923l-1.75-.385c-1.21-.275-1.567-.77-1.567-1.594 0-.934.742-1.485 1.952-1.485 1.32 0 2.034.495 2.144 1.677l2.75-.33c-.22-2.474-1.924-3.49-4.73-3.49-2.475 0-4.84.935-4.84 3.932 0 1.869.907 3.052 3.19 3.601l1.859.44c1.375.33 1.87.88 1.87 1.76 0 1.045-.99 1.474-2.86 1.474-2.776 0-3.931-1.46-4.59-3.436l-.907-2.75C11.744 7.825 9.676 6 6.293 6 2.418 6 0 8.57 0 12.227c0 3.52 1.814 6.077 5.91 6.077 3.052 0 4.674-1.099 4.674-1.099v.005z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const CodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
)

const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    username: 'mulinco',
    url: 'https://github.com/mulinco',
    icon: <GitHubIcon />,
    delay: 1,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    username: 'mariaclararodrigues3113',
    url: 'https://linkedin.com/in/mariaclararodrigues3113',
    icon: <LinkedInIcon />,
    delay: 2,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    username: '@mulynco',
    url: 'https://instagram.com/mulynco',
    icon: <InstagramIcon />,
    delay: 3,
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    username: '@mulinko',
    url: 'https://tiktok.com/@mulinko',
    icon: <TikTokIcon />,
    delay: 4,
  },
  {
    id: 'lastfm',
    label: 'Last.fm',
    username: 'mulinco',
    url: 'https://www.last.fm/pt/user/mulinco',
    icon: <LastFmIcon />,
    delay: 5,
  },
]

const projects: ProjectLink[] = [
  {
    id: 'proj1',
    label: 'Portfólio Pessoal',
    description: 'Portfólio construído com React e Vite.',
    url: 'https://mulincodev.vercel.app',
    tag: '',
    delay: 6,
    icon: <CodeIcon />,
  },
  {
    id: 'proj12',
    label: 'Ponira Lab',
    description: 'Agência de Design e Desenvolvimento Web.',
    url: 'https://www.poniralab.com',
    icon: <CodeIcon />,
    tag: 'freelance',
    delay: 7,
  },
]

function SocialCard({ link }: { link: SocialLink }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-card flex items-center gap-4 px-5 py-4 group w-full"
      style={{ animationDelay: `${link.delay * 80}ms` }}
    >
      <span
        className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200"
        style={{
          background: 'rgba(255,255,255,0.04)',
          color: 'var(--text-muted)',
        }}
      >
        <span className="group-hover:[color:var(--accent)] transition-colors duration-200">
          {link.icon}
        </span>
      </span>

      <div className="flex-1 min-w-0">
        <p
          className="font-heading font-600 text-sm leading-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {link.label}
        </p>
        <p
          className="font-mono text-xs mt-0.5 truncate"
          style={{ color: 'var(--text-muted)' }}
        >
          {link.username}
        </p>
      </div>

      <span
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ color: 'var(--accent)' }}
      >
        <ExternalLinkIcon />
      </span>
    </a>
  )
}

function ProjectCard({ project }: { project: ProjectLink }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-card flex items-center gap-4 px-5 py-4 group w-full"
      style={{ animationDelay: `${project.delay * 80}ms` }}
    >
      <span
        className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200"
        style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)' }}
      >
        <span className="group-hover:[color:var(--accent)] transition-colors duration-200">
          <CodeIcon />
        </span>
      </span>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p
            className="font-heading font-semibold text-sm leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {project.label}
          </p>
          <span
            className="font-mono text-xs px-2 py-0.5 rounded-full"
            style={{
              background: 'var(--red-dim)',
              color: 'var(--accent)',
              fontSize: '0.6rem',
              letterSpacing: '0.08em',
            }}
          >
            {project.tag}
          </span>
        </div>
        <p className="font-mono text-xs mt-0.5 truncate" style={{ color: 'var(--text-muted)' }}>
          {project.description}
        </p>
      </div>

      <span
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ color: 'var(--accent)' }}
      >
        <ExternalLinkIcon />
      </span>
    </a>
  )
}

function Avatar({ isKawaii, onDoubleClick }: { isKawaii: boolean, onDoubleClick?: () => void }) {
  return (
    <div 
      className={`relative ${isKawaii ? 'sticker-effect-hero' : ''}`}
      onDoubleClick={onDoubleClick}
      title="Segredo: duplo-clique para trocar seu tema"
    >
      {!isKawaii && (
        <div
          className="avatar-ring absolute inset-0"
        />
      )}
      
      <div
        className={`relative w-28 h-28 flex items-center justify-center text-2xl font-bold select-none overflow-hidden ${
          isKawaii ? 'animate-morph' : 'goth-avatar-pic'
        }`}
        style={{
          background: isKawaii ? '#fff' : 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
          border: isKawaii ? '4px solid #fff' : 'none',
          color: 'var(--accent)',
          boxShadow: isKawaii ? 'none' : '0 0 40px rgba(210, 4, 45, 0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        <img 
          src="/maria-avatar.jpg" 
          alt="Avatar" 
          className="w-full h-full object-cover foto-dark" 
        />
        <img 
          src="/maria-avatar.jpg" 
          alt="Avatar Kawaii" 
          className="w-full h-full object-cover foto-light" 
        />
      </div>
    </div>
  )
}

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

