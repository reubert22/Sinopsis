import apiClient from '../../utils/api-client'
import { apiKey } from '../../utils/constants'

export const getGenres = () =>
  apiClient.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)

export const getPopular = () =>
  apiClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`)

export const getTopRated = () =>
  apiClient.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`)

export const getNowPlaying = () =>
  apiClient.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=1`)

export const getUpcoming = () =>
  apiClient.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=1`)

export const getLatest = () =>
  apiClient.get(`https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}`)

export const getSimilar = (id) =>
  apiClient.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&page=1`)

export const getMovieTrailer = (movieId) =>
  apiClient.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`)