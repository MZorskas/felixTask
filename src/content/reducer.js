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
          error: null,
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
          loading: false,
          data: action.payload,
          error: action.error.statusText,
        },
      };
    }
    case types.SINGLE_MOVIE_REQUEST: {
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: true,
          error: null,
        },
      };
    }
    case types.SINGLE_MOVIE_SUCCESS: {
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: false,
          data: state.movies.data.some(({ id }) => id === action.payload.id)
            ? state.movies.data
            : [...state.movies.data, action.payload],
        },
      };
    }
    case types.SINGLE_MOVIE_FAILURE: {
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: false,
          error: action.payload,
        },
      };
    }
    case types.GET_FAVORITE_MOVIES: {
      console.log('GET_FAVORITE_MOVIES', { action, state });
      return {
        ...state,
        movies: {
          ...state.movies,
          data: state.movies.data.filter((movie) =>
            action.favorites.includes(movie.id)
          ),
        },
      };
    }
    default:
      return state;
  }
}

export default content;
