import type { TeamMember } from '~~/types/team'
import type { ApiResponse } from '~~/types/api'

export const useTeam = () => {
  const getTeamMembers = () => {
    return useFetch<ApiResponse<TeamMember[]>>('/api/team')
  }

  return {
    getTeamMembers
  }
}
