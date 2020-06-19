import React from 'react';
import './index.scss';
import MovieBlock from '../MovieBlock';
import { connect } from 'react-redux';

function MoviesContainer({ movies, ...props }) {
  return (
    <div className="MoviesContainer">
      {movies.map((movie) => {
        return (
          <MovieBlock
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

function mapStateToProps({ content: { movies } }) {
  return {
    movies,
  };
}

export default connect(mapStateToProps)(MoviesContainer);
