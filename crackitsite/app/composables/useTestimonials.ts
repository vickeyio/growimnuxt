import type { Testimonial } from '~~/types/testimonial'
import type { ApiResponse } from '~~/types/api'

export const useTestimonials = () => {
  const getTestimonials = () => {
    return useFetch<ApiResponse<Testimonial[]>>('/api/testimonials')
  }

  return {
    getTestimonials
  }
}
