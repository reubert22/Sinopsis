import * as types from './types'

const initialState = {
  page: 1,
  totalPages: 0,
  list: [],
  isLoading: false,
};

export const search = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case types.SUCCESS_GET_LIST:
      return {
        ...state,
        list: action.list
      };
    default:
      return state;
  }
};
