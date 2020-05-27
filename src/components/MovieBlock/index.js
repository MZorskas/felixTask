import React from 'react';
import './index.css';
import Button from '../Button';

function MovieBlock({ children, title, placeHolder, href }) {
  return (
    <div className="movieBlock">
      <div className="img-container">
        <img className="" src={placeHolder} alt="Movie image" />
        <div className="movie-info">
          <a href={href}>{title}</a>
          {children}
          {/* {shave('.blabla', 100)} */}
          <Button buttonSize="btn--small">Favorite</Button>
        </div>
      </div>
    </div>
  );
}

export default MovieBlock;
