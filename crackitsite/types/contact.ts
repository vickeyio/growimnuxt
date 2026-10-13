export interface ContactInfo {
  address: string
  phone: string
  phoneClean: string
  email: string
  happyClients: string
  videoUrl: string
  openingHours: {
    weekdays: string
    saturday: string
    sunday: string
  }
  socialLinks: {
    facebook: string
    twitter: string
    linkedin: string
    youtube: string
  }
  marqueeItems: string[]
}

export interface ContactMessageInput {
  name: string
  email: string
  message: string
}
