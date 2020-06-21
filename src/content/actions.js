import * as types from './types';
import authentication from '../authentication';

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

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch({ type: types.MOVIES_REQUEST });
    console.log('fetchingMovies', authentication);
    // console.log('Action loadMovies', data);
    // return { type: types.SAVE_MOVIES, data };
    const response = await fetch(
      'https://academy-video-api.herokuapp.com/content/items',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.token,
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
