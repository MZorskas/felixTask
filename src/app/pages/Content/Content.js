import React, { useState, useCallback, useEffect } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MoviesContainer from '../../components/MoviesContainer';
import Loader from '../../components/Loader';
import content from '../../../content';

function Content({ loadMovies, token }) {
  // const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getMovies = useCallback(async () => {
    const response = await fetch(
      'https://academy-video-api.herokuapp.com/content/items',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        },
      }
    );
    if (!response.ok) return setError('Error while loading movies');

    const data = await response.json();
    // setMovies(data);
    loadMovies(data);
    setLoading(false);
  }, [setError, setLoading, loadMovies, token]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader text={error ? error : 'Loading movies'} />
      ) : (
        <MoviesContainer />
      )}
    </React.Fragment>
  );
}

const enhance = connect(
  (state) => {
    return {
      // movies: content.movies,
      token: state.authentication.token,
    };
  },
  (dispatch) => {
    return {
      loadMovies: bindActionCreators(content.actions.loadMovies, dispatch),
    };
  }
);

export default enhance(Content);
