import * as types from '../utils/action.types'

const initialState = {
  genres: {
    list: [],
    isLoading: false
  },
  playing: {
    list: [],
    isLoading: false,
  },
  popular: {
    list: [],
    isLoading: false,
    mostPopular: {}
  }
};

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_GENRES:
      return {
        ...state,
        genres: { ...state.genres, list: action.list }
      };
    case types.GENRES_IS_LOADING:
      return {
        ...state,
        genres: { ...state.genres, isLoading: action.isLoading }
      };

    case types.SUCCESS_GET_PLAYING:
      return {
        ...state,
        playing: { ...state.playing, list: action.list }
      };
    case types.PLAYING_IS_LOADING:
      return {
        ...state,
        playing: { ...state.playing, isLoading: action.isLoading }
      };

    case types.SUCCESS_GET_POPULAR:
      return {
        ...state,
        popular: { ...state.popular, list: action.list }
      };
    case types.SUCCESS_GET_MOST_POPULAR:
      return {
        ...state,
        popular: { ...state.popular, mostPopular: action.mostPopular }
      };
    case types.POPULAR_IS_LOADING:
      return {
        ...state,
        popular: { ...state.popular, isLoading: action.isLoading }
      };
    default:
      return state;
  }
};
