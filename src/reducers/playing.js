import { SUCCESS_GET_PLAYING, PLAYING_IS_LOADING } from '../utils/action.types'

const initialState = {
  list: [],
  isLoading: false
};

export const playing = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_GET_PLAYING:
      return {
        ...state,
        list: action.list
      };
    case PLAYING_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
};
