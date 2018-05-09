import {
  GET_NEARBY_IMAGES_REQUEST,
  GET_NEARBY_IMAGES_SUCCESS,
  GET_NEARBY_IMAGES_ERROR
} from "../constants/constants";

const initialState = {
  requesting: null,
  success: null,
  error: null,
  images: []
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEARBY_IMAGES_REQUEST:
      return { ...state, requesting: true, success: false, error: false };
    case GET_NEARBY_IMAGES_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        error: false,
        images: action.images
      };
    case GET_NEARBY_IMAGES_ERROR:
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

export default galleryReducer;
