import {
  SET_DIRECTIONS
  // RESET_DIRECTIONS
} from "../../redux/constants/constants";
import direction from "../../redux/reducers/directionReducer";

const mockState = {
  directions: {
    directions: [
      {
        legs: [
          {
            steps: {}
          }
        ]
      }
    ]
  }
};

describe("direction reducer", () => {
  it("setups default direction values", () => {
    const state = direction(undefined, { type: "@@INIT" });

    expect(state).toEqual({ directions: [] });
  });

  it("sets the directions", () => {
    const state = direction(undefined, {
      type: SET_DIRECTIONS,
      directions: mockState.directions
    });

    expect(state).toEqual({ directions: mockState.directions });
  });

  // it("resets directions", () => {
  //   const state = direction(mockState, { type: RESET_DIRECTIONS });

  //   expect(state).toEqual({ directions: [] });
  // });
});
