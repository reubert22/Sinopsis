import * as types from './types';

export const isLoading = isLoading => ({
  type: types.LOADING,
  isLoading
});

export const successGetList = list => ({
  type: types.SUCCESS_GET_LIST,
  list
});