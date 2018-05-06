import {
  GET_MOVIE_DETAILS_REQUEST,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_ERROR
} from "../constants/constants";

const initialState = {
  requesting: null,
  success: null,
  error: null,
  data: {}
};

const movieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS_REQUEST:
      return { ...state, requesting: true, success: false, error: false };
    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        error: false,
        data: action.movie
      };
    case GET_MOVIE_DETAILS_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default movieDetailReducer;
