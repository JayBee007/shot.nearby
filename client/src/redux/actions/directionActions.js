import { SET_DIRECTIONS, RESET_DIRECTIONS } from "../constants/constants";

export const setDirections = directions => ({
  type: SET_DIRECTIONS,
  directions
});

export const resetDirections = () => ({
  type: RESET_DIRECTIONS
});
