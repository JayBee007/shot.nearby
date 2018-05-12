import { SET_DIRECTIONS, RESET_DIRECTIONS } from "../constants/constants";

const initialState = {
  directions: []
};

const directionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIRECTIONS:
      return { ...state, directions: action.directions };
    case RESET_DIRECTIONS:
      window.directionsDisplay.setMap(null);
      return { ...state, directions: [] };
    default:
      return state;
  }
};

export default directionReducer;
