import {
  MOVIES_LOADING,
  MOVIES_SUCCESS,
  MOVIES_ERROR,
  SET_RATING,
  SET_SELECTED_MOVIE,
} from "./types";
import axios from "axios";
const { REACT_APP_API_KEY, REACT_APP_API } = process.env;

export const loadMovies = () => {
  return (dispatch) => {
    dispatch({
      type: MOVIES_LOADING,
    });
    let URL = `${REACT_APP_API}discover/movie?api_key=${REACT_APP_API_KEY}`;
    axios
      .get(URL)
      .then((res) => {
        dispatch({
          type: MOVIES_SUCCESS,
          payload: res.data.results,
        });
      })
      .catch((err) => {
        dispatch({
          type: MOVIES_ERROR,
          payload: err.response ? err.response.status_message : "Error",
        });
      });
  };
};

export const queryMovies = (query) => {
  return (dispatch) => {
    dispatch({
      type: MOVIES_LOADING,
    });
    let URL = `${REACT_APP_API}search/movie?api_key=${REACT_APP_API_KEY}&query=${query}`;
    axios
      .get(URL)
      .then((res) => {
        dispatch({
          type: MOVIES_SUCCESS,
          payload: res.data.results,
        });
      })
      .catch((err) => {
        dispatch({
          type: MOVIES_ERROR,
          payload: err.response ? err.response.status_message : "Error",
        });
      });
  };
};

export const setRating = (rate) => {
  return (dispatch) =>
    dispatch({
      type: SET_RATING,
      payload: rate,
    });
};

export const movieSelect = (movie) => {
  return (dispatch) =>
    dispatch({
      type: SET_SELECTED_MOVIE,
      payload: movie,
    });
};
