import aboutData from '../../data/about.json'
import type { ApiResponse } from '~~/types/api'

export default defineEventHandler((): ApiResponse<typeof aboutData> => {
  return {
    data: aboutData
  }
})
