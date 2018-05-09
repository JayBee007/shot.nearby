import { combineReducers } from "redux";

import marker from "./markerReducer";
import movie from "./movieDetailReducer";
import nav from "./navReducer";
import map from "./mapReducer";
import gallery from "./galleryReducer";

const rootReducer = combineReducers({
  marker,
  movie,
  nav,
  map,
  gallery
});

export default rootReducer;
