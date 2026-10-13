import type { ApiResponse } from '~~/types/api'

export const useClients = () => {
  const getClients = () => {
    return useFetch<ApiResponse<Array<{ name: string; logo: string }>>>('/api/clients')
  }

  return {
    getClients
  }
}
