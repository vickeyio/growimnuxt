import blogs from '../../data/blogs.json'
import type { BlogPost } from '~~/types/blog'
import type { ApiResponse } from '~~/types/api'

export default defineEventHandler((event): ApiResponse<BlogPost[]> => {
  const query = getQuery(event)
  const tag = typeof query.tag === 'string' ? query.tag.trim().toLowerCase() : ''

  let items = blogs as BlogPost[]

  if (tag) {
    items = items.filter(b => b.tag.toLowerCase() === tag)
  }

  return {
    data: items,
    meta: {
      total: items.length
    }
  }
})
