import React from 'react';
import './index.scss';
import MovieBlock from '../MovieBlock';
import { connect } from 'react-redux';
import content from '../../../content';

function MoviesContainer({ movies, favorites }) {
  console.log('MoviesContainer', favorites);
  return (
    <div className="MoviesContainer">
      {favorites
        ? favorites.map((movie) => {
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
          })
        : movies.map((movie) => {
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

function mapStateToProps(state) {
  return {
    movies: content.selectors.getMoviesData(state),
  };
}

export default connect(mapStateToProps)(MoviesContainer);
