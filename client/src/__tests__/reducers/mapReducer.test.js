import { SET_CURRENT_LOCATION } from "../../redux/constants/constants";
import map from "../../redux/reducers/mapReducer";

const initialState = {
  location: {
    lat: 37.775316,
    lng: -122.4174374
  }
};

describe("map reducer", () => {
  it("sets the inital location of the user", () => {
    const state = map(undefined, { type: "@@INIT" });

    expect(state).toEqual(initialState);
  });

  it("sets the current location of the user", () => {
    const newLocation = {
      location: {
        lat: 48,
        lng: 122
      }
    };
    const state = map(initialState, {
      type: SET_CURRENT_LOCATION,
      location: newLocation.location
    });

    expect(state).toEqual({ location: newLocation.location });
  });
});
