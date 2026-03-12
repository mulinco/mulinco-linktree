export interface SocialLink {
  id: string
  label: string
  username: string
  url: string
  icon: React.ReactNode
  delay: number
}

export interface ProjectLink {
  id: string
  label: string
  description: string
  url: string
  tag: string
  delay: number
  icon: React.ReactNode
}
