import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

//Modules
import content from '../../../content/';

//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Components
import Button from '../../components/Button';
import Separator from '../../components/Separator';
import Banner from '../../components/Banner';
import MoviesContainer from '../../components/MoviesContainer';
import Loader from '../../components/Loader';

// Images
import HeroImage from '../../images/Hero.jpg';

function Home({ fetchMovies, token, loading, error }) {
  const history = useHistory();

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // useEffect(() => {
  //   if (error) {
  //     localStorage.removeItem('token');
  //     history.replace('/');
  //   }
  // }, [error]);

  return (
    <React.Fragment>
      <Banner placeHolder={HeroImage} title="Wanna more Content?"></Banner>
      <Separator />
      {loading ? (
        <Loader text={error ? error : 'Loading movies'} />
      ) : (
        <MoviesContainer />
      )}
      <div className="btnContainer">
        {!token && !loading && (
          <Button buttonStyle="btn--primary--solid" buttonSize="btn--large">
            Get More Content
          </Button>
        )}
      </div>
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

export default enhance(Home);
