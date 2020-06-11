import React from 'react';
import './index.scss';

//Components

import MovieContainer from '../../components/MovieContainer';

function Movie() {
  return (
    <React.Fragment>
      <div className="Movie">
        <MovieContainer></MovieContainer>
      </div>
    </React.Fragment>
  );
}

export default Movie;
