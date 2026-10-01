export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  socialLinks?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
  }
}
