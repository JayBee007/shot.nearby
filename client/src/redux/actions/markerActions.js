import {
  SHOW_MARKER_DETAILS,
  HIDE_MARKER_DETAILS,
  SHOW_IMAGES,
  HIDE_IMAGES
} from "../constants/constants";

export const showMarkerDetails = location => ({
  type: SHOW_MARKER_DETAILS,
  location
});

export const hideMarkerDetails = () => ({
  type: HIDE_MARKER_DETAILS
});

export const showImages = () => ({
  type: SHOW_IMAGES
});

export const hideImages = () => ({
  type: HIDE_IMAGES
});
