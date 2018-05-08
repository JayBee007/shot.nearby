import {
  SET_CURRENT_LOCATION,
  SET_DIRECTION_RENDERER,
  SET_DIRECTION_SERVICE
} from "../constants/constants.js";

export const setCurrentLocation = location => ({
  type: SET_CURRENT_LOCATION,
  location
});

export const setDirectionService = directionService => ({
  type: SET_DIRECTION_SERVICE,
  directionService
});

export const setDirectionRenderer = directionRenderer => ({
  type: SET_DIRECTION_RENDERER,
  directionRenderer
});
