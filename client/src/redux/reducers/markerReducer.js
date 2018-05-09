import {
  SHOW_MARKER_DETAILS,
  HIDE_MARKER_DETAILS,
  SHOW_IMAGES,
  HIDE_IMAGES
} from "../constants/constants";

const initialState = {
  isMarkerDetailsVisible: false,
  areImagesVisible: false,
  location: {}
};

const markerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MARKER_DETAILS:
      return {
        ...state,
        isMarkerDetailsVisible: true,
        location: action.location
      };
    case HIDE_MARKER_DETAILS:
      return { ...state, isMarkerDetailsVisible: false };
    case SHOW_IMAGES:
      return { ...state, areImagesVisible: true };
    case HIDE_IMAGES:
      return { ...state, areImagesVisible: false };
    default:
      return state;
  }
};

export default markerReducer;
