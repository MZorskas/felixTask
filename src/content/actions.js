import * as types from './types';

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

export const loadMovies = (data) => {
  console.log('Action loadMovies', data);
  return { type: types.SAVE_MOVIES, data };
};
