import type { ContactInfo, ContactMessageInput } from '~~/types/contact'
import type { ApiResponse } from '~~/types/api'

export const useContact = () => {
  const getContactInfo = () => {
    return useFetch<ApiResponse<ContactInfo>>('/api/contact-info')
  }

  const sendMessage = async (input: ContactMessageInput) => {
    return await $fetch<ApiResponse<{ message: string; received: ContactMessageInput }>>('/api/contact', {
      method: 'POST',
      body: input
    })
  }

  return {
    getContactInfo,
    sendMessage
  }
}
