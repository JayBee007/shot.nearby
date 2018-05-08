import { combineReducers } from "redux";

import marker from "./markerReducer";
import movie from "./movieDetailReducer";
import nav from "./navReducer";
import map from "./mapReducer";

const rootReducer = combineReducers({
  marker,
  movie,
  nav,
  map
});

export default rootReducer;
