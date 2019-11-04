import apiClient from '../../utils/api-client';
import { apiKey } from '../../utils/constants';

export const getGenres = () =>
  apiClient.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-br`);

export const getPopular = () =>
  apiClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-br&page=1`);

