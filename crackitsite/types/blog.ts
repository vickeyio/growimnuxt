export interface BlogPost {
  id: string
  slug: string
  title: string
  date: {
    day: string
    month: string
  }
  tag: string
  commentsCount: number
  image: string
  isFeatured?: boolean
  author?: {
    name: string
    avatar: string
    role?: string
  }
  content?: string
}
