import { combineReducers } from "redux";

import marker from "./markerReducer";
import movie from "./movieDetailReducer";
import nav from "./navReducer";
import map from "./mapReducer";
import gallery from "./galleryReducer";
import directions from "./directionReducer";

const rootReducer = combineReducers({
  marker,
  movie,
  nav,
  map,
  gallery,
  directions
});

export default rootReducer;
