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
    const mostPopular = Math.floor(Math.random() * response.data.results.length);
    dispatch(actions.successGetMostPopular(response.data.results[mostPopular]))
    dispatch(actions.successGetPopular(response.data.results))
    dispatch(actions.isLoadingPopular(false))
  } catch (e) {
    dispatch(actions.isLoadingPopular(false))
  }
}