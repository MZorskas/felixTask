import React from 'react';
import './index.scss';
import Button from '../Button';

function MovieBlock({
  children,
  title,
  placeHolder,
  href,
  onClick,
  isFavorite,
}) {
  return (
    <div className="movieBlock">
      <div className="img-container">
        <img className="" src={placeHolder} alt="Movie" />
      </div>
      <div className="movie-info">
        <a href={href}>{title}</a>
        {children}

        <Button
          buttonSize="btn--medium"
          onClick={onClick}
          buttonStyle={isFavorite && 'btn--primary--outline'}
        >
          {!isFavorite ? 'Favorite' : 'Remove'}
        </Button>
      </div>
    </div>
  );
}

export default MovieBlock;
