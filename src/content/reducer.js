import * as types from './types';

const DEFAULT_CONTENT_STATE = {
  favorites: [],
  movies: [],
};

function content(state = DEFAULT_CONTENT_STATE, action) {
  switch (action.type) {
    case types.TOGGLE_FAVORITE: {
      if (state.favorites.includes(action.id)) {
        return {
          ...state,
          favorites: state.favorites.filter((id) => id !== action.id),
        };
      } else {
        return { ...state, favorites: [...state.favorites, action.id] };
      }
    }
    case types.SAVE_MOVIES: {
      return {
        ...state,
        movies: action.data,
      };
    }
    case types.SAVE_MOVIE: {
      return {
        ...state,
        movies: state.movies.push(action.data),
      };
    }
    default:
      return state;
  }
}

export default content;
