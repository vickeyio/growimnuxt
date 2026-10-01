import contactInfo from '../../data/contact-info.json'
import type { ContactInfo } from '~~/types/contact'
import type { ApiResponse } from '~~/types/api'

export default defineEventHandler((): ApiResponse<ContactInfo> => {
  return {
    data: contactInfo as ContactInfo
  }
})
