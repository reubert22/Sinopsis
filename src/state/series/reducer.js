import * as types from './types';

const initialState = {
  popular: {
    list: [],
    isLoading: false
  },
  onTheAir: {
    list: [],
    isLoading: false,
  },
  topRated: {
    list: [],
    isLoading: false,
  },
  airingToday: {
    list: [],
    isLoading: false,
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
    case types.SUCCESS_GET_ON_THE_AIR:
      return {
        ...state,
        onTheAir: { ...state.onTheAir, list: action.list }
      }
    case types.ON_THE_AIR_IS_LOADING:
      return {
        ...state,
        onTheAir: { ...state.onTheAir, isLoading: action.isLoading }
      }
    case types.SUCCESS_GET_TOP_RATED:
      return {
        ...state,
        topRated: { ...state.topRated, list: action.list }
      }
    case types.TOP_RATED_IS_LOADING:
      return {
        ...state,
        topRated: { ...state.topRated, isLoading: action.isLoading }
      }
    case types.SUCCESS_GET_AIRING_TODAY:
      return {
        ...state,
        airingToday: { ...state.airingToday, list: action.list }
      }
    case types.AIRING_TODAY_IS_LOADING:
      return {
        ...state,
        airingToday: { ...state.airingToday, isLoading: action.isLoading }
      }
    default:
      return state;
  }
};
