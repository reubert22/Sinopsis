import apiClient from '../../utils/api-client'
import { apiKey } from '../../utils/constants'

export const searchList = (value, type) =>
  apiClient.get(`search/${type}?api_key=${apiKey}&language=en-US&page=1&query=${value}&include_adult=false`);