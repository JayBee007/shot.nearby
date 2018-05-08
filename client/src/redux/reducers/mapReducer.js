import { SET_CURRENT_LOCATION } from "../constants/constants";

const initialState = {
  location: {
    lat: 37.775316,
    lng: -122.4174374
  }
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_LOCATION:
      return { ...state, location: action.location };
    default:
      return state;
  }
};

export default mapReducer;
