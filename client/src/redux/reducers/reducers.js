import { combineReducers } from "redux";

import marker from "./markerReducer";
import movie from "./movieDetailReducer";
import nav from "./navReducer";

const rootReducer = combineReducers({
  marker,
  movie,
  nav
});

export default rootReducer;
