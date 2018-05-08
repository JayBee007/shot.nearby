import {
  SET_CURRENT_LOCATION,
  SET_DIRECTION_RENDERER,
  SET_DIRECTION_SERVICE
} from "../constants/constants";

const initialState = {
  location: {
    lat: 37.775316,
    lng: -122.4174374
  },
  directionService: {},
  directionRenderer: {}
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_LOCATION:
      return { ...state, location: action.location };
    case SET_DIRECTION_RENDERER:
      // const directionRenderer = new action.google.maps.DirectionsRenderer();
      return { ...state, directionRenderer: window.directionRenderer };
    case SET_DIRECTION_SERVICE:
      // const directionService = new action.google.maps.DirectionsService();
      return { ...state, directionService: window.directionService };
    default:
      return state;
  }
};

export default mapReducer;
