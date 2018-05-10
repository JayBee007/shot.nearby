import { SET_CURRENT_LOCATION } from "../../redux/constants/constants";
import { setCurrentLocation } from "../../redux/actions/actions";

describe("map actions", () => {
  it("sets the given location as current location", () => {
    const location = { lat: 145.393, lng: 23.21 };
    const result = setCurrentLocation(location);

    expect(result).toEqual({
      type: SET_CURRENT_LOCATION,
      location
    });
  });
});
