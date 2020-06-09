import * as types from './types'

export const successGetGenres = list => ({
  type: types.SUCCESS_GET_GENRES,
  list,
});

export const successGetPopular = object => ({
  type: types.SUCCESS_GET_POPULAR,
  object
});

export const successGetPlaying = object => ({
  type: types.SUCCESS_GET_PLAYING,
  object,
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

export const successGetSimilar = list => ({
  type: types.SUCCESS_GET_SIMILAR,
  list,
});

// ---- //
export const successSelectMovie = selected => ({
  type: types.SUCCESS_SELECT_MOVIE,
  selected
})

export const successIdSelectedMovie = videoId => ({
  type: types.SUCCESS_ID_SELECTED_MOVIE,
  videoId
})
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

export const isLoadingTrailer = isLoadingTrailer => ({
  type: types.TRAILER_IS_LOADING,
  isLoadingTrailer
})

export const isLoadingSimilar = isLoading => ({
  type: types.SIMILAR_IS_LOADING,
  isLoading
})

export const isLoadingMorePopular = isLoading => ({
  type: types.MORE_POPULAR_IS_LOADING,
  isLoading
})