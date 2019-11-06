import * as types from '../../utils/action.types'

export const successGetGenres = list => ({
  type: types.SUCCESS_GET_GENRES,
  list,
});

export const successGetPopular = list => ({
  type: types.SUCCESS_GET_POPULAR,
  list,
});

export const successGetPlaying = list => ({
  type: types.SUCCESS_GET_PLAYING,
  list,
});

export const successGetTopRated = list => ({
  type: types.SUCCESS_GET_TOP_RATED,
  list,
});

export const successGetUpcoming = list => ({
  type: types.SUCCESS_GET_UPCOMING,
  list,
});

export const successGetLatest = latest => ({
  type: types.SUCCESS_GET_LATEST,
  latest,
});

// ---- //
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

export const isLoadingTopRated = isLoading => ({
  type: types.TOP_RATED_IS_LOADING,
  isLoading
})

export const isLoadingUpcoming = isLoading => ({
  type: types.UPCOMING_IS_LOADING,
  isLoading
})

export const isLoadingLatest = isLoading => ({
  type: types.LATEST_IS_LOADING,
  isLoading
})