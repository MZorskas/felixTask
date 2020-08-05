import React from 'react';
import { useParams } from 'react-router-dom';

//Components
import MovieContainer from '../components/MovieContainer';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  Movie: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexGrow: 1,
  },
});

function Movie() {
  const { movieId } = useParams();
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.Movie}>
        <MovieContainer movieId={movieId}></MovieContainer>
      </div>
    </React.Fragment>
  );
}

export default Movie;
