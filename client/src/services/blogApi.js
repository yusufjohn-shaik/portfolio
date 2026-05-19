import api from './api'

export const blogApi = {
  getAll: (params = {}) => api.get('/blogs', { params }),
  getBySlug: (slug) => api.get(`/blogs/${slug}`),
  getCategories: () => api.get('/blogs/categories'),
}
