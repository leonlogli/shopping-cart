import axios from 'axios'
import { API_BASE_URL } from '../config'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
})

export { apiClient }
export default apiClient
