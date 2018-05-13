import { combineReducers } from "redux";

import marker from "./markerReducer";
import movie from "./movieDetailReducer";
import nav from "./navReducer";
import map from "./mapReducer";
import directions from "./directionReducer";

const rootReducer = combineReducers({
  marker,
  movie,
  nav,
  map,
  directions
});

export default rootReducer;
