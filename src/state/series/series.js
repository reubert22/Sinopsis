import * as types from './types';

const initialState = {
  popular: {
    list: [],
    isLoading: false
  },
  latest: {
    latest: {},
    isLoading: false
  },
};

export const series = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_POPULAR:
      return {
        ...state,
        popular: { ...state.popular, list: action.list }
      };
    case types.POPULAR_IS_LOADING:
      return {
        ...state,
        popular: { ...state.popular, isLoading: action.isLoading }
      };
    case types.SUCCESS_GET_LATEST:
      return {
        ...state,
        latest: { ...state.latest, latest: action.latest }
      }
    case types.LATEST_IS_LOADING:
      return {
        ...state,
        latest: { ...state.latest, isLoading: action.isLoading }
      }
    default:
      return state;
  }
};
