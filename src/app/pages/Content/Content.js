import React, { useState, useCallback, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.scss';

import MoviesContainer from '../../components/MoviesContainer';
import MovieContainer from '../../components/MovieContainer';

function Content(props) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getMovies = useCallback(async () => {
    const response = await fetch(
      'https://academy-video-api.herokuapp.com/content/items',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('token'),
        },
      }
    );
    if (!response.ok) {
      throw setError({ error: response });
    }
    const data = await response.json();
    setMovies(data);
    setLoading(false);
  }, [setError, setMovies, setLoading]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <React.Fragment>
      <MoviesContainer
        movies={movies}
        favorites={props.favorites}
        loading={loading}
        toggleFavorite={props.toggleFavorite}
      />
      <Switch>
        <Route path={`${Content}/:movieId`}>
          <MovieContainer />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default Content;
