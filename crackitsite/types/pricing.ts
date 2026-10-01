export interface PricingPlan {
  id: string
  title: string
  price: string
  period: string
  features: string[]
  isPopular?: boolean
  billingCycle: 'monthly' | 'yearly'
}

export interface PricingData {
  monthly: PricingPlan[]
  yearly: PricingPlan[]
}
