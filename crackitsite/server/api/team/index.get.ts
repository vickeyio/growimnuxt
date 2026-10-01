import team from '../../data/team.json'
import type { TeamMember } from '~~/types/team'
import type { ApiResponse } from '~~/types/api'

export default defineEventHandler((): ApiResponse<TeamMember[]> => {
  return {
    data: team as TeamMember[],
    meta: {
      total: team.length
    }
  }
})
