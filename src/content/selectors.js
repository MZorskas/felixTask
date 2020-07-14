export const getFavorites = (state) => state.content.favorites;
export const isFavoriteById = (state, id) =>
  state.content.favorites.includes(id);

export const isMovieFetched = (state, movieId) => {
  console.log('isMovieFetched state', state);
  return state.content.movies.data.find((movie) => movie.id === movieId);
};

export const getFavoriteMovies = (state) =>
  state.content.movies.data.filter((movie) =>
    state.content.favorites.includes(movie.id)
  );

export const isFetchingMovies = (state) => state.content.movies.loading;
export const getMoviesData = (state) => state.content.movies.data;
export const getMoviesError = (state) => state.content.movies.error;
