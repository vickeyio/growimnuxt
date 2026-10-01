import pricing from '../../data/pricing.json'
import type { PricingData, PricingPlan } from '~~/types/pricing'
import type { ApiResponse } from '~~/types/api'

export default defineEventHandler((event): ApiResponse<PricingData | PricingPlan[]> => {
  const query = getQuery(event)
  const cycle = query.cycle as string | undefined

  if (cycle === 'monthly') {
    return {
      data: pricing.monthly as PricingPlan[]
    }
  }

  if (cycle === 'yearly') {
    return {
      data: pricing.yearly as PricingPlan[]
    }
  }

  return {
    data: pricing as PricingData
  }
})
