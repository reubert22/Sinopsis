import apiClient from '../../utils/api-client'
import { apiKey } from '../../utils/constants'

export const getPopular = () =>
  apiClient.get(`/tv/popular?api_key=${apiKey}&page=1`);

export const getTopRated = () =>
  apiClient.get(`/tv/top_rated?api_key=${apiKey}&page=1`);

export const getOnTheAir = () =>
  apiClient(`/tv/on_the_air?api_key=${apiKey}&page=1`);

export const getAiringToday = () =>
  apiClient(`/tv/airing_today?api_key=${apiKey}&page=1`);

export const getSerieTrailer = id =>
  apiClient.get(`/tv/${id}/videos?api_key=${apiKey}&language=en-US`);

export const getSimilar = id =>
  apiClient.get(`/tv/${id}/similar?api_key=${apiKey}&page=1`);