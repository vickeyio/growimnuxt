import type { ApiResponse } from '~~/types/api'
import type { ContactMessageInput } from '~~/types/contact'

export default defineEventHandler(async (event): Promise<ApiResponse<{ message: string; received: ContactMessageInput }>> => {
  const body = await readBody<ContactMessageInput>(event)

  const errors: Record<string, string[]> = {}
  if (!body?.name || !body.name.trim()) {
    errors.name = ['Name is required.']
  }
  if (!body?.email || !body.email.includes('@')) {
    errors.email = ['A valid email address is required.']
  }
  if (!body?.message || !body.message.trim()) {
    errors.message = ['Message cannot be empty.']
  }

  if (Object.keys(errors).length > 0) {
    throw createError({
      statusCode: 422,
      statusMessage: 'UNPROCESSABLE_ENTITY',
      data: {
        error: {
          code: 'VALIDATION_ERROR',
          message: 'The given data was invalid.',
          details: errors
        }
      }
    })
  }

  return {
    data: {
      message: 'Thank you! Your message has been sent successfully.',
      received: body
    }
  }
})
