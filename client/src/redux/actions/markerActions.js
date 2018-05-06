import {
  SHOW_MARKER_DETAILS,
  HIDE_MARKER_DETAILS
} from "../constants/constants";

export const showMarkerDetails = movieTitle => ({
  type: SHOW_MARKER_DETAILS,
  movieTitle
});

export const hideMarkerDetails = () => ({
  type: HIDE_MARKER_DETAILS
});
