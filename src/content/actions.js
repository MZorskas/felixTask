import * as types from './types';
import authentication from '../authentication';
import store from '../app/state';

export const toggleFavorite = (id, isFavorite) => {
  console.log('toggleFavorite', id, isFavorite);
  if (typeof isFavorite === 'boolean') {
    return {
      type: isFavorite ? types.REMOVE_FAVORITE : types.ADD_FAVORITE,
      id,
    };
  }
  return { type: types.TOGGLE_FAVORITE, id };
};

export const fetchMovies = ({ free } = {}) => {
  return async (dispatch) => {
    dispatch({ type: types.MOVIES_REQUEST });
    console.log('fetchingMovies', localStorage.getItem('token'));
    // console.log('Action loadMovies', data);
    // return { type: types.SAVE_MOVIES, data };
    const response = await fetch(
      `https://academy-video-api.herokuapp.com/content/${
        free ? 'free-' : ''
      }items`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: authentication.selectors.isAuthorized(
            store.getState()
          ),
        },
      }
    );
    if (!response.ok) {
      console.log(response);
      dispatch({
        type: types.MOVIES_FAILURE,
        payload: await response.json(),
        error: response,
      });
    } else {
      dispatch({ type: types.MOVIES_SUCCESS, payload: await response.json() });
    }
  };
};

export const fetchSingleMovie = (movieId) => {
  return async (dispatch) => {
    dispatch({ type: types.SINGLE_MOVIE_REQUEST });
    console.log('fetchingMovies', localStorage.getItem('token'));
    // console.log('Action loadMovies', data);
    // return { type: types.SAVE_MOVIES, data };
    const response = await fetch(
      `https://academy-video-api.herokuapp.com/content/items/${movieId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('token'),
        },
      }
    );
    if (!response.ok) {
      console.log(response);
      dispatch({
        type: types.SINGLE_MOVIE_FAILURE,
        payload: await response.json(),
        error: response,
      });
    } else {
      dispatch({
        type: types.SINGLE_MOVIE_SUCCESS,
        payload: await response.json(),
      });
    }
  };
};
