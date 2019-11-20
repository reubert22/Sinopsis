import * as actions from './actions';
import * as repository from './repository';

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

export const getPopular = () => async (dispatch) => {
  try {
    dispatch(actions.isLoadingPopular(true))
    const response = await repository.getPopular()
    dispatch(actions.successGetPopular(response.data.results))
    const latestOfPopular = Math.floor(Math.random() * response.data.results.length);
    dispatch(actions.successGetLatest(response.data.results[latestOfPopular]))
    dispatch(actions.isLoadingPopular(false))
  } catch (e) {
    dispatch(actions.isLoadingPopular(false))
  }
}

export const getPlaying = () => async (dispatch) => {
  try {
    dispatch(actions.isLoadingPlaying(true))
    const response = await repository.getNowPlaying()
    dispatch(actions.successGetPlaying(response.data.results))
    dispatch(actions.isLoadingPlaying(false))
  } catch (e) {
    dispatch(actions.isLoadingPlaying(false))
  }
}

export const getTopRated = () => async (dispatch) => {
  try {
    dispatch(actions.isLoadingTopRated(true))
    const response = await repository.getTopRated()
    dispatch(actions.successGetTopRated(response.data.results))
    dispatch(actions.isLoadingTopRated(false))
  } catch (e) {
    dispatch(actions.isLoadingTopRated(false))

  }
}

export const getUpcoming = () => async (dispatch) => {
  try {
    dispatch(actions.isLoadingUpcoming(true))
    const response = await repository.getUpcoming()
    dispatch(actions.successGetUpcoming(response.data.results))
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