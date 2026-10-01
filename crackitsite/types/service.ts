export interface ServiceFaq {
  question: string
  answer: string
}

export interface ServiceProvideItem {
  title: string
  description: string
  icon: string
}

export interface Service {
  id: string
  slug: string
  title: string
  category: string
  shortDescription: string
  fullDescription?: string
  fullDescriptionSecondary?: string
  image: string
  thumbnailImage?: string
  icon: string
  iconBg?: string
  features?: string[]
  whatWeProvide?: ServiceProvideItem[]
  challengeText?: string
  challengeBullets?: string[]
  faqs?: ServiceFaq[]
}
