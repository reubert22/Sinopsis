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