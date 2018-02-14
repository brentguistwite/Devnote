import apiUrl from '../config';

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheeseRequest = () => ({
  type: FETCH_CHEESES_REQUEST,
});
export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = cheeses => ({
  type: FETCH_CHEESES_SUCCESS,
  cheeses,
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = error => ({
  type: FETCH_CHEESES_ERROR,
  error,
});

export const ADD_CHEESE = 'ADD_CHEESE';
export const addCheese = cheese => ({
  type: ADD_CHEESE,
  cheese,
});

export const fetchCheeses = () => (dispatch) => {
  dispatch(fetchCheeseRequest());
  return fetch(`${apiUrl}/cheeses`)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(cheeses =>
      dispatch(fetchCheesesSuccess(cheeses)))
    .catch(err =>
      dispatch(fetchCheesesError(err)));
};
