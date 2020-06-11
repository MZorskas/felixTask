import React, { useState, useCallback, useEffect } from 'react';
import './index.scss';
import { connect } from 'react-redux';

//Components
import Button from '../../components/Button';
import Separator from '../../components/Separator';
import Banner from '../../components/Banner';
import MoviesContainer from '../../components/MoviesContainer';

// Images
import HeroImage from '../../images/Hero.jpg';

function Home({ loadMovies, token }) {
  // const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(token);
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
    //   throw setError({ error: response });
    // }
    const data = await response.json();
    // setMovies(data);
    loadMovies(data);
    setLoading(false);
  }, [loadMovies, setLoading, token]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <React.Fragment>
      <Banner placeHolder={HeroImage} title="Wanna more Content?"></Banner>
      <Separator />
      <MoviesContainer loading={loading} />
      <div className="btnContainer">
        {!token && (
          <Button buttonStyle="btn--primary--solid" buttonSize="btn--large">
            Get More Content
          </Button>
        )}
      </div>
    </React.Fragment>
  );
}

function mapStateToProps({ content: { movies }, authentication: { token } }) {
  console.log('Home, mapStateToProps', movies);
  return {
    movies,
    token,
  };
}

const mapDispatchToProps = (dispatch) => ({
  // console.log('MovieBlock, mapDispatchToProps', dispatch);
  loadMovies: (data) => dispatch({ type: 'GET_MOVIES', data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
