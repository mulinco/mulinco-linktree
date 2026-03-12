import { SocialLink } from '../types'
import { ExternalLinkIcon } from './Icons'

export default function SocialCard({ link }: { link: SocialLink }) {
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
