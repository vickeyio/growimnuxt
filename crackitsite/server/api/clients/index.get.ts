import clientsData from '../../data/clients.json'
import type { ApiResponse } from '~~/types/api'

export default defineEventHandler((): ApiResponse<typeof clientsData> => {
  return {
    data: clientsData
  }
})
