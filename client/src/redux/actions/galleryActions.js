import axios from "axios";

import {
  GET_NEARBY_IMAGES_REQUEST,
  GET_NEARBY_IMAGES_SUCCESS,
  GET_NEARBY_IMAGES_ERROR
} from "../constants/constants.js";

const getImagesRequest = () => ({
  type: GET_NEARBY_IMAGES_REQUEST
});

const getImagesSuccess = images => ({
  type: GET_NEARBY_IMAGES_SUCCESS,
  images
});

const getImagesError = error => ({
  type: GET_NEARBY_IMAGES_ERROR,
  error
});

const fetchPlaces = location => {
  const baseUrl =
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
  const url = `${baseUrl}${location.lat},${
    location.lng
  }&radius=1500&key=AIzaSyAxlHPHrZBPgk8Vho3gc6RylhUDY1Zp1jU`;

  const response = axios.get(url);

  return response;
};

// const fetchImages = places => {};

export function getNearByImages(location) {
  return function(dispatch) {
    dispatch(getImagesRequest());

    return fetchPlaces(location)
      .then(
        res => console.log(res),
        err => {
          dispatch(getImagesError(err));
        }
      )
      .then(data => {
        dispatch(getImagesSuccess(data));
      });
  };
}
