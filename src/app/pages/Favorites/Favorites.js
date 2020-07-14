import React, { useEffect } from 'react';
import './index.scss';

//Redux
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

//Components
import MoviesContainer from '../../components/MoviesContainer';
import Button from '../../components/Button';
import Loader from '../../components/Loader';

//Modules
import content from '../../../content';
import { useHistory } from 'react-router-dom';

function Favorites() {
  const favorites = useSelector(content.selectors.getFavorites);
  const loading = useSelector(content.selectors.isFetchingMovies);
  const error = useSelector(content.selectors.getMoviesError);
  const getFavoriteMovies = useSelector(content.selectors.getFavoriteMovies);

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

export default Favorites;
