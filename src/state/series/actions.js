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