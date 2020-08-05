import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import MaterialGridContainer from './MaterialGridContainer';
import Grid from '@material-ui/core/Grid';
// Context
import { ContentContext } from '../context/ContentContext';

// Components
import MovieBlock from './MovieBlock';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    padding: 30,
  },
});

function MoviesContainer() {
  const location = useLocation();
  const classes = useStyles();

  const { data, favorites } = useContext(ContentContext);

  const favoriteMovies = data.filter((movie) => favorites.includes(movie.id));

  return (
    <MaterialGridContainer>
      {location.pathname === '/favorites' &&
        !!favoriteMovies &&
        favoriteMovies.map((movie) => {
          return (
            <Grid
              className={classes.gridItem}
              item
              lg={4}
              md={4}
              sm={6}
              xs={12}
              key={movie.id}
            >
              <MovieBlock
                key={movie.id}
                title={movie.title}
                placeHolder={movie.image}
                movieId={movie.id}
              >
                {movie.description}
              </MovieBlock>
            </Grid>
          );
        })}

      {(location.pathname === '/' || location.pathname === '/content') &&
        data &&
        data.map((movie) => {
          return (
            <Grid
              item
              className={classes.gridItem}
              lg={4}
              md={4}
              sm={6}
              xs={12}
              key={movie.id}
            >
              <MovieBlock
                key={movie.id}
                title={movie.title}
                placeHolder={movie.image}
                movieId={movie.id}
              >
                {movie.description}
              </MovieBlock>
            </Grid>
          );
        })}
    </MaterialGridContainer>
  );
}

export default MoviesContainer;
