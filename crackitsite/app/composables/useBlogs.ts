import type { BlogPost } from '~~/types/blog'
import type { ApiResponse } from '~~/types/api'

export const useBlogs = () => {
  const getBlogs = (tag?: MaybeRefOrGetter<string | undefined>) => {
    return useFetch<ApiResponse<BlogPost[]>>('/api/blogs', {
      query: {
        tag: tag ? toRef(tag) : undefined
      }
    })
  }

  return {
    getBlogs
  }
}
