import React, { useEffect, useContext } from 'react';
import './index.scss';

// Context
import { ContentContext } from '../../context/ContentContext';
import { UserContext } from '../../context/UserContext';

// Components
import Button from '../../components/Button';
import Separator from '../../components/Separator';
import Banner from '../../components/Banner';
import MoviesContainer from '../../components/MoviesContainer';
import Loader from '../../components/Loader';

// Images
import HeroImage from '../../images/Hero.jpg';

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

export default Home;
