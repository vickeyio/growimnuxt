import type { ApiResponse } from '~~/types/api'

export const useAbout = () => {
  const getAbout = () => {
    return useFetch<ApiResponse<any>>('/api/about')
  }

  return {
    getAbout
  }
}
