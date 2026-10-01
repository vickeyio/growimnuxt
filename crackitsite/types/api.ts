export interface ApiResponse<T> {
  data: T
  meta?: {
    total?: number
    page?: number
    limit?: number
    totalPages?: number
  }
}

export interface ApiErrorDetail {
  code: string
  message: string
  details?: Record<string, string[]>
}

export interface ApiErrorResponse {
  error: ApiErrorDetail
}
