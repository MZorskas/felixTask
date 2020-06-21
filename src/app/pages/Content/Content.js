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

function Content({ fetchMovies, loading, token, error }) {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

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
      loading: content.selectors.isFetchingMovies(state),
      error: content.selectors.getMoviesError(state),
      token: state.authentication.token,
    };
  },
  (dispatch) => {
    return {
      fetchMovies: bindActionCreators(content.actions.fetchMovies, dispatch),
    };
  }
);

export default enhance(Content);
