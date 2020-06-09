import apiClient from '../../utils/api-client'
import { apiKey } from '../../utils/constants'

export const getGenres = () =>
  apiClient.get(`/genre/movie/list?api_key=${apiKey}`)

export const getPopular = page =>
  apiClient.get(`/movie/popular?api_key=${apiKey}&page=${page}`)

export const getTopRated = () =>
  apiClient.get(`/movie/top_rated?api_key=${apiKey}&page=1`)

export const getNowPlaying = page =>
  apiClient.get(`/movie/now_playing?api_key=${apiKey}&page=${page}`)

export const getUpcoming = () =>
  apiClient.get(`/movie/upcoming?api_key=${apiKey}&page=1`)

export const getLatest = () =>
  apiClient.get(`/movie/latest?api_key=${apiKey}`)

export const getSimilar = (id) =>
  apiClient.get(`/movie/${id}/similar?api_key=${apiKey}&page=1`)

export const getMovieTrailer = (movieId) =>
  apiClient.get(`/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`)