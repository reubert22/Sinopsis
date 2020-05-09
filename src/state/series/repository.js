import apiClient from '../../utils/api-client'
import { apiKey } from '../../utils/constants'

export const getPopular = () =>
  apiClient.get(`/tv/popular?api_key=${apiKey}&page=1`);