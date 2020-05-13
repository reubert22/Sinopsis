import * as types from './types';

export const succesGetTrailerId = id => ({
  type: types.SUCCESS_GET_TRAILER_ID,
  id
});

export const isLoadingTrailerId = isLoading => ({
  type: types.IS_LOADING_TRAILER_ID,
  isLoading
});

export const successGetSimilarList = list => ({
  type: types.SUCCESS_GET_SIMILAR_LIST,
  list
});

export const isLoadingSimilarList = isLoading => ({
  type: types.IS_LOADING_SIMILAR_LIST,
  isLoading
});

export const resetTrailerId = () => ({ type: types.RESET_TRAILER_ID });