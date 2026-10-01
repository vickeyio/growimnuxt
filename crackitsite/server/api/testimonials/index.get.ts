import testimonials from '../../data/testimonials.json'
import type { Testimonial } from '~~/types/testimonial'
import type { ApiResponse } from '~~/types/api'

export default defineEventHandler((): ApiResponse<Testimonial[]> => {
  return {
    data: testimonials as Testimonial[],
    meta: {
      total: testimonials.length
    }
  }
})
