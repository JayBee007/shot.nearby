import { SET_CURRENT_LOCATION } from "../constants/constants.js";

export const setCurrentLocation = location => ({
  type: SET_CURRENT_LOCATION,
  location
});
