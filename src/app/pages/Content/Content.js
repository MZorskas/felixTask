import React, { useState, useCallback, useEffect } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import MoviesContainer from '../../components/MoviesContainer';
import content from '../../../content';

function Content({ content, loadMovies, token }) {
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
    if (!response.ok) {
      throw setError('Error fetching movies');
    }
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
      {!error && <MoviesContainer loading={loading} />}
    </React.Fragment>
  );
}

function mapStateToProps({ content, authentication: { token } }) {
  console.log('Home, mapStateToProps', { token, content });
  return {
    content,
    token,
  };
}

const mapDispatchToProps = (dispatch) => ({
  // console.log('MovieBlock, mapDispatchToProps', dispatch);
  loadMovies: (data) => dispatch({ type: content.types.SAVE_MOVIES, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
