import {
  SHOW_MARKER_DETAILS,
  HIDE_MARKER_DETAILS
} from "../constants/constants";

const initialState = {
  isMarkerDetailsVisible: false,
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
    default:
      return state;
  }
};

export default markerReducer;
