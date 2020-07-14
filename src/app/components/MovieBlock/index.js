import React, { useContext } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

// Context
import { ContentContext } from '../../context/ContentContext';

// Components
import Button from '../Button';

function MovieBlock({ children, title, placeHolder, movieId }) {
  const { favorites, toggleFavorite } = useContext(ContentContext);
  const isFavorite = favorites.includes(movieId);
  const Favorite = () => toggleFavorite(movieId, isFavorite);

  return (
    <div className="movieBlock">
      <div className="img-container">
        <Link to={{ pathname: `/content/${movieId}`, state: { movieId } }}>
          <img className="" src={placeHolder} alt={`${title} img`} />
        </Link>
      </div>
      <div className="movie-info">
        <Link to={{ pathname: `/content/${movieId}`, state: { movieId } }}>
          {title}
        </Link>
        {children}

        <Button
          buttonSize="btn--medium"
          onClick={Favorite}
          buttonStyle={isFavorite && 'btn--primary--outline'}
        >
          {isFavorite ? 'Remove' : 'Favorite'}
        </Button>
      </div>
    </div>
  );
}

export default MovieBlock;
