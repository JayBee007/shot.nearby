import { SHOW_NAV, HIDE_NAV, SET_RADIUS } from "../constants/constants";

export const showNav = () => ({
  type: SHOW_NAV
});

export const hideNav = () => ({
  type: HIDE_NAV
});

export const setRadius = radius => ({
  type: SET_RADIUS,
  radius
});
