import * as types from '../../utils/action.types'

export const successGetGenres = list => ({
  type: types.SUCCESS_GET_GENRES,
  list,
});

export const isLoadingGenres = isLoading => ({
  type: types.GENRES_IS_LOADING,
  isLoading
})