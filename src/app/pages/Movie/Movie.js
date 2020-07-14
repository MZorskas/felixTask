import React from 'react';
import './index.scss';
import { Route, Redirect, useLocation, useParams } from 'react-router-dom';

//Components

import MovieContainer from '../../components/MovieContainer';

function Movie() {
  const { movieId } = useParams();

  // console.log('MOVIE page', movieId);
  return (
    <React.Fragment>
      <div className="Movie">
        <MovieContainer movieId={movieId}></MovieContainer>
      </div>
    </React.Fragment>
  );
}

export default Movie;
