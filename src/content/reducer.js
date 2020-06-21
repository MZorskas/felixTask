import * as types from './types';

const DEFAULT_CONTENT_STATE = {
  favorites: [],
  movies: {
    loading: false,
    error: null,
    data: [],
  },
};

const addFavorite = (state, action) => ({
  ...state,
  favorites: [...state.favorites, action.id],
});
const removeFavorite = (state, action) => ({
  ...state,
  favorites: state.favorites.filter((id) => id !== action.id),
});

function content(state = DEFAULT_CONTENT_STATE, action) {
  switch (action.type) {
    case types.TOGGLE_FAVORITE: {
      return state.favorites.includes(action.id)
        ? removeFavorite(state, action)
        : addFavorite(state, action);
    }
    case types.REMOVE_FAVORITE: {
      return removeFavorite(state, action);
    }
    case types.ADD_FAVORITE: {
      return addFavorite(state, action);
    }

    case types.MOVIES_REQUEST: {
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: true,
        },
      };
    }
    case types.MOVIES_SUCCESS: {
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: false,
          data: action.payload,
        },
      };
      //   movies: state.movies
      //     .concat(action.data)
      //     .reduce(
      //       (moviesArray, newMovie) =>
      //         moviesArray.findIndex(
      //           (oldMovie) => oldMovie.name == newMovie.name
      //         ) < 0
      //           ? [...moviesArray, newMovie]
      //           : moviesArray,
      //       []
      //     ),
      // };
    }
    case types.MOVIES_FAILURE: {
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: false,
          data: action.payload,
          error: action.error,
        },
      };
    }

    case types.SAVE_MOVIE: {
      console.log('SAVE_MOVIE', state, action.data);
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
