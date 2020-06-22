import React, { useEffect } from 'react';
import './index.scss';

//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Components
import MoviesContainer from '../../components/MoviesContainer';
import Loader from '../../components/Loader';

//Modules
import content from '../../../content';
import { useHistory } from 'react-router-dom';

function Content({ fetchMovies, loading, error }) {
  const history = useHistory();

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // useEffect(() => {
  //   if (error) {
  //     console.log('error', error);
  //     localStorage.removeItem('token');
  //     history.replace('/');
  //   }
  // }, [error, history]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader text={error ? error.statusText : 'Loading movies'} />
      ) : (
        <MoviesContainer />
      )}
    </React.Fragment>
  );
}

const enhance = connect(
  (state) => {
    return {
      loading: content.selectors.isFetchingMovies(state),
      error: content.selectors.getMoviesError(state),
      // token: state.authentication.token,
    };
  },
  (dispatch) => {
    return {
      fetchMovies: bindActionCreators(content.actions.fetchMovies, dispatch),
    };
  }
);

export default enhance(Content);
