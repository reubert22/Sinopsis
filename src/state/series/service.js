import * as actions from './actions';
import * as repository from './repository';

export const getPopular = () => async dispatch => {
  try {
    dispatch(actions.isLoadingPopular(true));
    const response = await repository.getPopular();
    dispatch(actions.successGetPopular(response.data.results));
    const latestOfPopular = Math.floor(Math.random() * response.data.results.length);
    dispatch(actions.successGetLatest(response.data.results[latestOfPopular]))
    dispatch(actions.isLoadingPopular(false));
  } catch (e) {
    dispatch(actions.isLoadingPopular(false));
  }
}