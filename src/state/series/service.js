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

export const getOnTheAir = () => async dispatch => {
  try {
    dispatch(actions.isLoadingGetOnTheAir(true));
    const response = await repository.getOnTheAir();
    dispatch(actions.successGetOnTheAir(response.data.results));
    dispatch(actions.isLoadingGetOnTheAir(false));
  } catch (e) {
    dispatch(actions.isLoadingGetOnTheAir(false));
  }
}

export const getTopRated = () => async dispatch => {
  try {
    dispatch(actions.isLoadingTopRated(true));
    const response = await repository.getTopRated();
    dispatch(actions.successGetTopRated(response.data.results))
    dispatch(actions.isLoadingTopRated(false));
  } catch (e) {
    dispatch(actions.isLoadingTopRated(false));
  }
}

export const getAiringToday = () => async dispatch => {
  try {
    dispatch(actions.isLoadingAiringToday(true));
    const response = await repository.getAiringToday();
    dispatch(actions.successGetAiringToday(response.data.results));
    dispatch(actions.isLoadingAiringToday(false));
  } catch (e) {
    dispatch(actions.isLoadingAiringToday(false));
  }
}