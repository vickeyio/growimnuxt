export interface PortfolioItem {
  id: string
  slug: string
  title: string
  category: string
  image: string
  detailImage?: string
  galleryImages?: string[]
  client?: string
  startDate?: string
  endDate?: string
  budget?: string
  overview?: string
  overviewSecondary?: string
  goalsText?: string
  goalsBullets?: string[]
  conclusionText?: string
}
