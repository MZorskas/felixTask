import React, { useState, useCallback, useEffect } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import content from '../../../content/';
import { bindActionCreators } from 'redux';
//Components
import Button from '../../components/Button';
import Separator from '../../components/Separator';
import Banner from '../../components/Banner';
import MoviesContainer from '../../components/MoviesContainer';
import Loader from '../../components/Loader';

// Images
import HeroImage from '../../images/Hero.jpg';

function Home({ loadMovies, token }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    // if (!response.ok) {
    //   return console.log(response);
    // }
    const data = await response.json();

    loadMovies(data);
    if (!data) {
      setError('Error while loading movies');
    }
    setLoading(false);
  }, [loadMovies, setLoading, token]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

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

export default enhance(Home);
