import React, { useState, useCallback, useEffect } from 'react';
import './index.scss';
import { useLocation } from 'react-router-dom';
//Components
import Button from '../../components/Button';
import Separator from '../../components/Separator';
import Banner from '../../components/Banner';
import MoviesContainer from '../../components/MoviesContainer';

// Images
import HeroImage from '../../images/Hero.jpg';

function Home(props) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const location = useLocation();

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
      <Banner placeHolder={HeroImage} title="Wanna more Content?"></Banner>
      <Separator />
      <MoviesContainer
        movies={movies}
        favorites={props.favorites}
        loading={loading}
        toggleFavorite={props.toggleFavorite}
      />
      <div className="btnContainer">
        <Button buttonStyle="btn--primary--solid" buttonSize="btn--large">
          Get More Content
        </Button>
      </div>
    </React.Fragment>
  );
}

export default Home;
