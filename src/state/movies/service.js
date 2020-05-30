import * as actions from './actions';
import * as repository from './repository';
import { returnType } from '../../utils/functions';

export const getGenres = () => async (dispatch) => {
  try {
    dispatch(actions.isLoadingGenres(true))
    const response = await repository.getGenres()
    dispatch(actions.successGetGenres(response.data.genres))
    dispatch(actions.isLoadingGenres(false))
  } catch (e) {
    dispatch(actions.isLoadingGenres(false))
  }
}

export const getPopular = () => async (dispatch, getState) => {
  const { movies: { latest: { latest }, popular: { page } } } = getState();
  try {
    dispatch(actions.isLoadingPopular(true))
    const response = await repository.getPopular(page)
    const newResponse = returnType(response.data.results, 'movie');
    dispatch(actions.successGetPopular({
      list: newResponse,
      page: response.data.page,
      totalPages: response.data.total_pages
    }))

    if (latest && !latest.id) {
      const latestOfPopular = Math.floor(Math.random() * newResponse.length);
      dispatch(actions.successGetLatest(newResponse[latestOfPopular]))
    }
    dispatch(actions.isLoadingPopular(false))
  } catch (e) {
    dispatch(actions.isLoadingPopular(false))
  }
}

export const getPlaying = () => async (dispatch) => {
  try {
    dispatch(actions.isLoadingPlaying(true))
    const response = await repository.getNowPlaying()
    const newResponse = returnType(response.data.results, 'movie');
    dispatch(actions.successGetPlaying(newResponse))
    dispatch(actions.isLoadingPlaying(false))
  } catch (e) {
    dispatch(actions.isLoadingPlaying(false))
  }
}

export const getTopRated = () => async (dispatch) => {
  try {
    dispatch(actions.isLoadingTopRated(true))
    const response = await repository.getTopRated()
    const newResponse = returnType(response.data.results, 'movie');
    dispatch(actions.successGetTopRated(newResponse))
    dispatch(actions.isLoadingTopRated(false))
  } catch (e) {
    dispatch(actions.isLoadingTopRated(false))
  }
}

export const getUpcoming = () => async (dispatch) => {
  try {
    dispatch(actions.isLoadingUpcoming(true))
    const response = await repository.getUpcoming()
    const newResponse = returnType(response.data.results, 'movie');
    dispatch(actions.successGetUpcoming(newResponse))
    dispatch(actions.isLoadingUpcoming(false))
  } catch (e) {
    dispatch(actions.isLoadingUpcoming(false))
  }
}

export const getMovieTrailer = (movieId) => async (dispatch) => {
  try {
    dispatch(actions.isLoadingTrailer(true))
    const response = await repository.getMovieTrailer(movieId)
    dispatch(actions.isLoadingTrailer(false))
    dispatch(actions.successIdSelectedMovie(response.data.results[0].key))
  } catch (e) {
    dispatch(actions.isLoadingTrailer(false))
  }
}

export const getSimilar = (movieId) => async (dispatch) => {
  try {
    dispatch(actions.isLoadingSimilar(true))
    const response = await repository.getSimilar(movieId)
    const newResponse = returnType(response.data.results, 'movie');
    dispatch(actions.isLoadingSimilar(false))
    dispatch(actions.successGetSimilar(newResponse))
  } catch (e) {
    dispatch(actions.isLoadingSimilar(false))
  }
}

export const getMorePopular = () => async (dispatch, getState) => {
  const { movies: { popular: { page, totalPages, list } } } = getState();
  try {
    dispatch(actions.isLoadingMorePopular(true))
    const response = await repository.getPopular(page !== totalPages ? page + 1 : page);
    const newResponse = returnType(response.data.results, 'movie');
    const updatedList = [...list, ...newResponse];
    dispatch(actions.successGetPopular({
      list: updatedList,
      page: response.data.page,
      totalPages: response.data.total_pages
    }))
    dispatch(actions.isLoadingMorePopular(false))
  } catch (e) {
    dispatch(actions.isLoadingMorePopular(false))
  }
}
