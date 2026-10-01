import type { PortfolioItem } from '~~/types/portfolio'
import type { ApiResponse } from '~~/types/api'

export interface PortfolioQueryParams {
  search?: MaybeRefOrGetter<string | undefined>
  category?: MaybeRefOrGetter<string | undefined>
  page?: MaybeRefOrGetter<number | undefined>
  limit?: MaybeRefOrGetter<number | undefined>
}

export const usePortfolio = () => {
  const getPortfolioItems = (params?: PortfolioQueryParams) => {
    return useFetch<ApiResponse<PortfolioItem[]>>('/api/portfolio', {
      query: {
        search: params?.search ? toRef(params.search) : undefined,
        category: params?.category ? toRef(params.category) : undefined,
        page: params?.page ? toRef(params.page) : undefined,
        limit: params?.limit ? toRef(params.limit) : undefined
      }
    })
  }

  const getPortfolioItemBySlug = (slug: MaybeRefOrGetter<string>) => {
    return useFetch<ApiResponse<PortfolioItem>>(() => `/api/portfolio/${toValue(slug)}`)
  }

  return {
    getPortfolioItems,
    getPortfolioItemBySlug
  }
}
