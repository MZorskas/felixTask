export const getFavorites = (state) => state.content.favorites;
export const isFavoriteById = (state, id) =>
  state.content.favorites.includes(id);
export const isMovieFetched = (state, movieId) =>
  state.content.movies.find((movie) => movie.id === movieId);
