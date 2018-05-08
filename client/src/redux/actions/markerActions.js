import {
  SHOW_MARKER_DETAILS,
  HIDE_MARKER_DETAILS
} from "../constants/constants";

export const showMarkerDetails = location => ({
  type: SHOW_MARKER_DETAILS,
  location
});

export const hideMarkerDetails = () => ({
  type: HIDE_MARKER_DETAILS
});
