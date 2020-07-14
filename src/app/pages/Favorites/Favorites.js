import React, { useContext } from 'react';
import './index.scss';

//Context
import { ContentContext } from '../../context/ContentContext';

//Components
import MoviesContainer from '../../components/MoviesContainer';
import Button from '../../components/Button';

function Favorites() {
  const { favorites } = useContext(ContentContext);

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
        <MoviesContainer />
      )}
    </React.Fragment>
  );
}

export default Favorites;
