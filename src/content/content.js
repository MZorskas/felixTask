const DEFAULT_CONTENT_STATE = {
  favorites: [],
  movies: [],
};

function content(state = DEFAULT_CONTENT_STATE, action) {
  console.log({ state, action });
  console.log(state.movies.data);
  switch (action.type) {
    case 'TOGGLE_FAVORITE': {
      if (state.favorites.includes(action.id)) {
        return {
          ...state,
          favorites: state.favorites.filter((id) => id !== action.id),
        };
      } else {
        return { ...state, favorites: [...state.favorites, action.id] };
      }
    }
    case 'GET_MOVIES': {
      return {
        ...state,
        movies: action.data,
      };
    }
    case 'GET_MOVIE': {
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
