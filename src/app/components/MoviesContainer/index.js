import React, { useContext } from 'react';
import './index.scss';
import { useLocation } from 'react-router-dom';

// Context
import { ContentContext } from '../../context/ContentContext';

// Components
import MovieBlock from '../MovieBlock';

function MoviesContainer() {
  const location = useLocation();

  const { data, favorites } = useContext(ContentContext);

  const favoriteMovies = data.filter((movie) => favorites.includes(movie.id));

  return (
    <div className="MoviesContainer">
      {location.pathname === '/favorites' &&
        !!favoriteMovies &&
        favoriteMovies.map((movie) => {
          return (
            <MovieBlock
              key={movie.id}
              title={movie.title}
              placeHolder={movie.image}
              movieId={movie.id}
            >
              <p>{movie.description}</p>
            </MovieBlock>
          );
        })}

      {(location.pathname === '/' || location.pathname === '/content') &&
        data &&
        data.map((movie) => {
          return (
            <MovieBlock
              key={movie.id}
              title={movie.title}
              placeHolder={movie.image}
              movieId={movie.id}
            >
              <p>{movie.description}</p>
            </MovieBlock>
          );
        })}
    </div>
  );
}

export default MoviesContainer;
