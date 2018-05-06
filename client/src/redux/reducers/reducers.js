import { combineReducers } from "redux";

import marker from "./markerReducer";
import movie from "./movieDetailReducer";

const rootReducer = combineReducers({
  marker,
  movie
});

export default rootReducer;
