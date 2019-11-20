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
  },
  topRated: {
    list: [],
    isLoading: false
  },
  upcoming: {
    list: [],
    isLoading: false
  },
  similar: {
    list: [],
    isLoading: false
  },
  latest: {
    latest: {},
    isLoading: false
  },
  selected: {},
  isLoadingTrailer: false,
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
    case types.POPULAR_IS_LOADING:
      return {
        ...state,
        popular: { ...state.popular, isLoading: action.isLoading }
      };

    case types.SUCCESS_GET_TOP_RATED:
      return {
        ...state,
        topRated: { ...state.topRated, list: action.list }
      };
    case types.TOP_RATED_IS_LOADING:
      return {
        ...state,
        topRated: { ...state.topRated, isLoading: action.isLoading }
      };

    case types.SUCCESS_GET_UPCOMING:
      return {
        ...state,
        upcoming: { ...state.upcoming, list: action.list }
      };
    case types.UPCOMING_IS_LOADING:
      return {
        ...state,
        upcoming: { ...state.upcoming, isLoading: action.isLoading }
      };

    case types.SUCCESS_GET_LATEST:
      return {
        ...state,
        latest: { ...state.latest, latest: action.latest }
      };
    case types.LATEST_IS_LOADING:
      return {
        ...state,
        latest: { ...state.latest, isLoading: action.isLoading }
      };

    case types.SUCCESS_SELECT_MOVIE:
      return {
        ...state,
        selected: action.selected
      };
    case types.SUCCESS_ID_SELECTED_MOVIE:
      return {
        ...state,
        selected: { ...state.selected, videoId: action.videoId }
      };

    case types.TRAILER_IS_LOADING:
      return {
        ...state,
        isLoadingTrailer: action.isLoadingTrailer
      };

    case types.SUCCESS_GET_SIMILAR:
      return {
        ...state,
        similar: { ...state.similar, list: action.list }
      };
    case types.SIMILAR_IS_LOADING:
      return {
        ...state,
        similar: { ...state.similar, isLoading: action.isLoading }
      };
    default:
      return state;
  }
};
