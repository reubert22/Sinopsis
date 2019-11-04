//@flow
import { SUCCESS_GET_POPULAR, SUCCESS_GET_MOST_POPULAR, POPULAR_IS_LOADING } from '../utils/action.types';

const initialState = {
  list: [],
  mostPopular: {},
  isLoading: false
};

export const popular = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_POPULAR:
      return {
        ...state,
        list: action.list
      };
    case SUCCESS_GET_MOST_POPULAR:
      return {
        ...state,
        mostPopular: action.mostPopular
      };
    case POPULAR_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
};
