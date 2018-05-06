import axios from "axios";

import {
  GET_MOVIE_DETAILS_REQUEST,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_ERROR
} from "../constants/constants";

const baseUrl = "https://www.omdbapi.com/?apikey=5f66bb1f&t=";

const fetchMovieDetails = movie => {
  const url = `${baseUrl}${movie}`;
  const response = axios.get(url);

  return response;
};

const movieRequest = () => ({
  type: GET_MOVIE_DETAILS_REQUEST
});

const movieSuccess = movie => ({
  type: GET_MOVIE_DETAILS_SUCCESS,
  movie
});

const movieError = error => ({
  type: GET_MOVIE_DETAILS_ERROR,
  error
});

export function getMovieDetails(movie) {
  return function(dispatch) {
    dispatch(movieRequest());

    return fetchMovieDetails(movie)
      .then(
        res => res.data,
        err => {
          dispatch(movieError(err));
        }
      )
      .then(data => {
        dispatch(movieSuccess(data));
      });
  };
}
