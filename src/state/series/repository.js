import apiClient from '../../utils/api-client'
import { apiKey } from '../../utils/constants'

export const getPopular = () =>
  apiClient.get(`/tv/popular?api_key=${apiKey}&page=1`);

export const getTopRated = () =>
  apiClient.get(`/tv/top_rated?api_key=${apiKey}&page=1`);

export const getOnTheAir = () =>
  apiClient(`/tv/on_the_air?api_key=${apiKey}&page=1`);

