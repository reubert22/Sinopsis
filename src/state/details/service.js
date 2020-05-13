import * as detailsAction from './actions';
import * as movieRepository from '../movies/repository';
import * as serieRepository from '../series/repository';
import { returnType } from '../../utils/functions';

export const getTrailer = (id, type) => async dispatch => {
  try {
    dispatch(detailsAction.isLoadingTrailerId(true));
    let response;
    if (type === 'movie') {
      response = await movieRepository.getMovieTrailer(id);
    } else {
      response = await serieRepository.getSerieTrailer(id);
    };
    dispatch(detailsAction.succesGetTrailerId(response.data.results[0].key));
    dispatch(detailsAction.isLoadingTrailerId(false));
  } catch (e) {
    dispatch(detailsAction.isLoadingTrailerId(false));
  }
};

export const getSimilar = (id, type) => async (dispatch) => {
  try {
    dispatch(detailsAction.isLoadingSimilarList(true));
    let response;
    if (type === 'movie') {
      response = await movieRepository.getSimilar(id);
    } else {
      response = await serieRepository.getSimilar(id);
    }
    newResponse = returnType(response.data.results, type);
    dispatch(detailsAction.successGetSimilarList(newResponse));
    dispatch(detailsAction.isLoadingSimilarList(false));
  } catch (e) {
    dispatch(detailsAction.isLoadingSimilarList(false));
  }
}