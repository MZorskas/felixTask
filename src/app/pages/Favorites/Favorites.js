import React, { useEffect } from 'react';
import './index.scss';

//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Components
import MoviesContainer from '../../components/MoviesContainer';
import Button from '../../components/Button';
import Loader from '../../components/Loader';

//Modules
import content from '../../../content';
import { useHistory } from 'react-router-dom';

function Favorites({
  fetchMovies,
  loading,
  error,
  favorites,
  getFavoriteMovies,
  areFavoritesFetched,
}) {
  console.log('Favorites Movies data', areFavoritesFetched);
  console.log('Favorites movies', favorites);
  //   useEffect(() => {
  //   }, [fetchMovies]);

  return (
    <React.Fragment>
      {favorites.length === 0 ? (
        <div className="NoFavorites">
          <h1 style={{ color: 'white' }}>You have no favorite movies!</h1>
          <Button to="/content" buttonStyle="btn--primary--solid">
            Find some!
          </Button>
        </div>
      ) : (
        <MoviesContainer favorites={getFavoriteMovies} />
      )}
    </React.Fragment>
  );
}

const enhance = connect((state) => {
  console.log('Favoritessss', state);
  return {
    favorites: content.selectors.getFavorites(state),
    loading: content.selectors.isFetchingMovies(state),
    error: content.selectors.getMoviesError(state),
    getFavoriteMovies: content.selectors.getFavoriteMovies(state),
    // token: state.authentication.token,
  };
});

export default enhance(Favorites);
