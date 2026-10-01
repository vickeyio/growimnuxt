import type { HeroSlide } from '~~/types/hero'
import type { ApiResponse } from '~~/types/api'

export const useHeroSlides = () => {
  const getSlides = () => {
    return useFetch<ApiResponse<HeroSlide[]>>('/api/slides')
  }

  return {
    getSlides
  }
}
