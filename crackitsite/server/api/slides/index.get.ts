import slides from '../../data/slides.json'
import type { HeroSlide } from '~~/types/hero'
import type { ApiResponse } from '~~/types/api'

export default defineEventHandler((): ApiResponse<HeroSlide[]> => {
  return {
    data: slides as HeroSlide[],
    meta: {
      total: slides.length
    }
  }
})
