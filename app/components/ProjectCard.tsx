import { ProjectLink } from '../types'
import { ExternalLinkIcon, CodeIcon } from './Icons'

export default function ProjectCard({ project }: { project: ProjectLink }) {
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
