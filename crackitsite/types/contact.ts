export interface ContactInfo {
  address: string
  phone: string
  phoneClean: string
  email: string
  openingHours: {
    weekdays: string
    sunday: string
    friday: string
  }
}

export interface ContactMessageInput {
  name: string
  email: string
  message: string
}
