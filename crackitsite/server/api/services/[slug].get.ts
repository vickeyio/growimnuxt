import services from '../../data/services.json'
import type { Service } from '~~/types/service'
import type { ApiResponse } from '~~/types/api'

export default defineEventHandler((event): ApiResponse<Service> => {
  const slug = getRouterParam(event, 'slug')
  const service = (services as Service[]).find(s => s.slug === slug)

  if (!service) {
    throw createError({
      statusCode: 404,
      statusMessage: 'NOT_FOUND',
      data: {
        error: {
          code: 'SERVICE_NOT_FOUND',
          message: `Service with slug '${slug}' was not found.`
        }
      }
    })
  }

  return {
    data: service
  }
})
