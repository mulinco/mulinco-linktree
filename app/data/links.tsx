import { SocialLink, ProjectLink } from '../types'
import {
  GitHubIcon,
  LinkedInIcon,
  TikTokIcon,
  LastFmIcon,
  InstagramIcon,
  CodeIcon,
} from '../components/Icons'

export const socialLinks: SocialLink[] = [
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

export const projects: ProjectLink[] = [
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
