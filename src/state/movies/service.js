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
  const { movies: { latest: { latest } } } = getState();
  try {
    dispatch(actions.isLoadingPopular(true))
    const response = await repository.getPopular()
    const newResponse = returnType(response.data.results, 'movie');
    dispatch(actions.successGetPopular(newResponse))

    if (latest && !latest.id) {
      const latestOfPopular = Math.floor(Math.random() * newResponse.length);
      console.log(newResponse[latestOfPopular])
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
