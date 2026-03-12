import { ProjectLink } from '../types'
import { ExternalLinkIcon, CodeIcon } from './Icons'

export default function ProjectCard({ project }: { project: ProjectLink }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 px-5 py-4 w-full overflow-hidden backdrop-blur-sm transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] animate-fadeUp
        goth:bg-surface goth:border goth:border-border goth:rounded-md
        goth:hover:border-border-hover goth:hover:bg-surface-hover goth:hover:-translate-y-[2px] goth:hover:shadow-[0_6px_28px_rgba(160,0,20,0.22),_0_0_0_1px_rgba(224,0,32,0.18)]
        kawaii:bg-white/60 kawaii:border-2 kawaii:border-transparent kawaii:rounded-[30px] kawaii:shadow-[0_4px_15px_rgba(216,100,135,0.1)] kawaii:backdrop-blur-md
        kawaii:hover:-translate-y-[3px] kawaii:hover:scale-[1.02] kawaii:hover:border-[rgba(216,100,135,0.5)] kawaii:hover:bg-white/90 kawaii:hover:shadow-[0_8px_25px_rgba(216,100,135,0.25)]
        active:translate-y-0"
      style={{ animationDelay: `${project.delay * 80}ms` }}
    >
      {/* Before overlay (gradient border animation) */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none" />
      {/* After overlay (corner gradient glow) */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-dim to-transparent to-[55%] opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none" />

      <span
        className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200 bg-[rgba(255,255,255,0.04)] text-text-muted group-hover:text-accent z-10"
      >
        <span>
          <CodeIcon />
        </span>
      </span>

      <div className="flex-1 min-w-0 z-10">
        <div className="flex items-center gap-2">
          <p className="font-heading font-semibold text-sm leading-tight text-text-primary">
            {project.label}
          </p>
          {project.tag && (
            <span className="font-mono text-[0.6rem] px-2 py-0.5 rounded-full tracking-[0.08em] bg-red-dim text-accent border border-[rgba(210,4,45,0.4)]">
              {project.tag}
            </span>
          )}
        </div>
        <p className="font-mono text-xs mt-0.5 truncate text-text-muted">
          {project.description}
        </p>
      </div>

      <span className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-accent z-10">
        <ExternalLinkIcon />
      </span>
    </a>
  )
}
