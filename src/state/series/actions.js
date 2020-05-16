import * as types from './types';

export const successGetPopular = list => ({
  type: types.SUCCESS_GET_POPULAR,
  list
})

export const isLoadingPopular = isLoading => ({
  type: types.POPULAR_IS_LOADING,
  isLoading
})

export const successGetLatest = latest => ({
  type: types.SUCCESS_GET_LATEST,
  latest
})

export const isLoadignLatest = isLoading => ({
  type: types.LATEST_IS_LOADING,
  isLoading
})

export const successGetOnTheAir = list => ({
  type: types.SUCCESS_GET_ON_THE_AIR,
  list
})

export const isLoadingGetOnTheAir = isLoading => ({
  type: types.ON_THE_AIR_IS_LOADING,
  isLoading
})

export const successGetTopRated = list => ({
  type: types.SUCCESS_GET_TOP_RATED,
  list
})

export const isLoadingTopRated = isLoading => ({
  type: types.TOP_RATED_IS_LOADING,
  isLoading
})

export const successGetAiringToday = list => ({
  type: types.SUCCESS_GET_AIRING_TODAY,
  list
})

export const isLoadingAiringToday = isLoading => ({
  type: types.AIRING_TODAY_IS_LOADING,
  isLoading
})