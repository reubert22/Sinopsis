//@flow
import { SUCCESS_GET_GENRES, GENRES_IS_LOADING } from '../utils/action.types';

const initialState = {
  list: [],
  isLoading: false
};

export const genres = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_GENRES:
      return {
        ...state,
        list: action.list
      };
    case GENRES_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
};
