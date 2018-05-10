import {
  SHOW_NAV,
  HIDE_NAV,
  SET_RADIUS
} from "../../redux/constants/constants";

import { showNav, hideNav, setRadius } from "../../redux/actions/actions";

describe("nav actions", () => {
  it("shows the nav bar", () => {
    const result = showNav();

    expect(result).toEqual({
      type: SHOW_NAV
    });
  });

  it("hides the nav bar", () => {
    const result = hideNav();

    expect(result).toEqual({
      type: HIDE_NAV
    });
  });

  it("sets the radius for showing markers", () => {
    const radius = 1500;
    const result = setRadius(radius);

    expect(result).toEqual({
      type: SET_RADIUS,
      radius
    });
  });
});
