import portfolio from '../../data/portfolio.json'
import type { PortfolioItem } from '~~/types/portfolio'
import type { ApiResponse } from '~~/types/api'

export default defineEventHandler((event): ApiResponse<PortfolioItem[]> => {
  const query = getQuery(event)
  const search = typeof query.search === 'string' ? query.search.trim().toLowerCase() : ''
  const category = typeof query.category === 'string' ? query.category.trim().toLowerCase() : ''
  const page = parseInt(String(query.page || '1'), 10)
  const limit = parseInt(String(query.limit || '10'), 10)

  let items = portfolio as PortfolioItem[]

  if (search) {
    items = items.filter(
      item =>
        item.title.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search)
    )
  }

  if (category) {
    items = items.filter(item => item.category.toLowerCase() === category)
  }

  const total = items.length
  const totalPages = Math.ceil(total / limit)
  const startIndex = (page - 1) * limit
  const paginated = items.slice(startIndex, startIndex + limit)

  return {
    data: paginated,
    meta: {
      total,
      page,
      limit,
      totalPages
    }
  }
})
