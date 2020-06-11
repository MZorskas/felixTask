import React from 'react';
import './index.scss';
import MovieBlock from '../MovieBlock';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Movie from '../../pages/Movie/Movie';

function MoviesContainer({ movies }, props) {
  console.log('xxxxxx', props);
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

      <Route path={`/content/:movieId`}>
        <Movie />
      </Route>
    </div>
  );
}

function mapStateToProps({ content: { movies } }) {
  console.log('MoviesContainer, mapStateToProps', movies);
  return {
    movies,
  };
}

export default connect(mapStateToProps)(MoviesContainer);
