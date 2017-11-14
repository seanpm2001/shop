import { getCategoryItems } from './categories.js';

export const UPDATE_LOCATION = 'UPDATE_LOCATION';

export const updateLocation = (path) => (dispatch) => {
  dispatch({
    type: UPDATE_LOCATION,
    path
  });
  dispatch(getCategoryItems());
};

export const pushState = (href) => (dispatch) => {
  window.history.pushState({}, '', href);
  dispatch(updateLocation(window.decodeURIComponent(window.location.pathname)));
};