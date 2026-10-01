import type { Service } from '~~/types/service'
import type { ApiResponse } from '~~/types/api'

export interface ServiceQueryParams {
  search?: MaybeRefOrGetter<string | undefined>
  category?: MaybeRefOrGetter<string | undefined>
  page?: MaybeRefOrGetter<number | undefined>
  limit?: MaybeRefOrGetter<number | undefined>
}

export const useServices = () => {
  const getServices = (params?: ServiceQueryParams) => {
    return useFetch<ApiResponse<Service[]>>('/api/services', {
      query: {
        search: params?.search ? toRef(params.search) : undefined,
        category: params?.category ? toRef(params.category) : undefined,
        page: params?.page ? toRef(params.page) : undefined,
        limit: params?.limit ? toRef(params.limit) : undefined
      }
    })
  }

  const getServiceBySlug = (slug: MaybeRefOrGetter<string>) => {
    return useFetch<ApiResponse<Service>>(() => `/api/services/${toValue(slug)}`)
  }

  return {
    getServices,
    getServiceBySlug
  }
}
