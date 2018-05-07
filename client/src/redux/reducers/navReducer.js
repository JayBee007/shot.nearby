import { SHOW_NAV, HIDE_NAV, SET_RADIUS } from "../constants/constants";

const initialState = {
  isNavVisible: false,
  radius: 1000
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NAV:
      return { ...state, isNavVisible: true };
    case HIDE_NAV:
      return { ...state, isNavVisible: false };
    case SET_RADIUS:
      return { ...state, radius: action.radius };
    default:
      return state;
  }
};

export default navReducer;
