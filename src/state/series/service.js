import * as actions from './actions';
import * as repository from './repository';
import { returnType } from '../../utils/functions';

export const getPopular = () => async (dispatch, getState) => {
  const { series: { latest: { latest } } } = getState();
  try {
    dispatch(actions.isLoadingPopular(true));
    const response = await repository.getPopular();
    const newResponse = returnType(response.data.results, 'serie');
    dispatch(actions.successGetPopular(newResponse));
    if (latest && !latest.id) {
      const latestOfPopular = Math.floor(Math.random() * newResponse.length);
      dispatch(actions.successGetLatest(newResponse[latestOfPopular]))
    }
    dispatch(actions.isLoadingPopular(false));
  } catch (e) {
    dispatch(actions.isLoadingPopular(false));
  }
};
