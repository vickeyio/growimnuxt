import type { PricingData } from '~~/types/pricing'
import type { ApiResponse } from '~~/types/api'

export const usePricing = () => {
  const getPricing = () => {
    return useFetch<ApiResponse<PricingData>>('/api/pricing')
  }

  return {
    getPricing
  }
}
