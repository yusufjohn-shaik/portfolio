import api from './api'

export const contactApi = {
  sendMessage: (data) => api.post('/contact', data),
}
