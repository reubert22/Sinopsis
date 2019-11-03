//@flow
import { SUCCESS_GET_GENRES } from '../utils/action.types';

const initialState = {
  list: [],
  isLoading: false
};

export const genres = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_GENRES:
      return {
        ...state,
        genres: action.genres
      };
    default:
      return state;
  }
};
