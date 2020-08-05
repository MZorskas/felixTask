import React, { useEffect, useContext } from 'react';

// Context
import { ContentContext } from '../context/ContentContext';
import { UserContext } from '../context/UserContext';

// Components
import Button from '../components/Button';

import Banner from '../components/Banner';
import MoviesContainer from '../components/MoviesContainer';
import Loader from '../components/Loader';

// Images
import HeroImage from '../images/Hero.jpg';

function Home() {
  const { fetchMovies, loading, error } = useContext(ContentContext);
  const { token } = useContext(UserContext);

  useEffect(() => {
    if (token) {
      fetchMovies();
    } else {
      fetchMovies({ free: true });
    }
  }, [token]);

  return (
    <React.Fragment>
      <Banner placeHolder={HeroImage} title="Wanna more Content?"></Banner>
      {loading ? (
        <Loader text={error ? error : 'Loading movies'} />
      ) : (
        <MoviesContainer />
      )}
      <div className="btnContainer">
        {!token && !loading && (
          <Button buttonStyle="solid" buttonSize="large">
            Get More Content
          </Button>
        )}
      </div>
    </React.Fragment>
  );
}

export default Home;
