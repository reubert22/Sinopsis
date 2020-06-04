import * as actions from './actions';
import * as repository from './repository';
import { returnType } from '../../utils/functions';

export const getSearch = (value, type) => async (dispatch) => {
  const newType = type ? 'movie' : 'tv'
  try {
    dispatch(actions.isLoading(true));
    const response = await repository.searchList(value, newType);
    const newResponse = returnType(response.data.results, newType);
    dispatch(actions.successGetList(newResponse));
    dispatch(actions.isLoading(false));
  } catch (e) {
    dispatch(actions.isLoading(false));
  }
}