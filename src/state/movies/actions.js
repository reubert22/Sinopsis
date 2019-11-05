import * as types from '../../utils/action.types'

export const successGetGenres = list => ({
  type: types.SUCCESS_GET_GENRES,
  list,
});

export const successGetPopular = list => ({
  type: types.SUCCESS_GET_POPULAR,
  list,
});

export const successGetMostPopular = mostPopular => ({
  type: types.SUCCESS_GET_MOST_POPULAR,
  mostPopular,
});

export const successGetPlaying = list => ({
  type: types.SUCCESS_GET_PLAYING,
  list,
});

export const isLoadingGenres = isLoading => ({
  type: types.GENRES_IS_LOADING,
  isLoading
})

export const isLoadingPopular = isLoading => ({
  type: types.POPULAR_IS_LOADING,
  isLoading
})

export const isLoadingPlaying = isLoading => ({
  type: types.PLAYING_IS_LOADING,
  isLoading
})