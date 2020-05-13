import * as types from './types';

const initialState = {
  trailerId: null,
  isLoadingTrailerId: false,
  similar: {
    list: [],
    isLoadingSimilar: false,
  },
};

export const details = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_TRAILER_ID:
      return { ...state, trailerId: action.id };
    case types.IS_LOADING_TRAILER_ID:
      return { ...state, isLoadingTrailerId: action.isLoading };
    case types.SUCCESS_GET_SIMILAR_LIST:
      return {
        ...state,
        similar: {
          ...state.similar,
          list: action.list
        }
      }
    case types.IS_LOADING_SIMILAR_LIST:
      return {
        ...state,
        similar: {
          ...state.similar,
          isLoadingSimilar: action.isLoading
        }
      }
    case types.RESET_TRAILER_ID:
      return { ...state, trailerId: initialState.trailerId };
    default:
      return state;
  }
};