import portfolio from '../../data/portfolio.json'
import type { PortfolioItem } from '~~/types/portfolio'
import type { ApiResponse } from '~~/types/api'

export default defineEventHandler((event): ApiResponse<PortfolioItem> => {
  const slug = getRouterParam(event, 'slug')
  const item = (portfolio as PortfolioItem[]).find(p => p.slug === slug)

  if (!item) {
    throw createError({
      statusCode: 404,
      statusMessage: 'NOT_FOUND',
      data: {
        error: {
          code: 'PORTFOLIO_NOT_FOUND',
          message: `Portfolio item with slug '${slug}' was not found.`
        }
      }
    })
  }

  return {
    data: item
  }
})
