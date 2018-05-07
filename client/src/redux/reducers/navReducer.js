import { SHOW_NAV, HIDE_NAV } from "../constants/constants";

const initialState = {
  isNavVisible: false
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NAV:
      return { ...state, isNavVisible: true };
    case HIDE_NAV:
      return { ...state, isNavVisible: false };
    default:
      return state;
  }
};

export default navReducer;
