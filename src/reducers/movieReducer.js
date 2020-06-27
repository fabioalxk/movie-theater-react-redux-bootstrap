import {
  MOVIES_SUCCESS,
  MOVIES_LOADING,
  MOVIES_ERROR,
  SET_RATING,
  SET_SELECTED_MOVIE,
} from "../actions/types.js";

const initialState = {
  movies: null,
  loading: false,
  rating: null,
  selectedMovie: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MOVIES_SUCCESS: {
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    }
    case MOVIES_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_RATING: {
      return {
        ...state,
        rating: action.payload,
      };
    }
    case SET_SELECTED_MOVIE: {
      return {
        ...state,
        selectedMovie: action.payload,
      };
    }
    case MOVIES_ERROR: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
}
