import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

//Modules
import content from '../../../content/';
import authentication from '../../../authentication';

//Redux
import { useSelector, useDispatch } from 'react-redux';

//Components
import Button from '../../components/Button';
import Separator from '../../components/Separator';
import Banner from '../../components/Banner';
import MoviesContainer from '../../components/MoviesContainer';
import Loader from '../../components/Loader';

// Images
import HeroImage from '../../images/Hero.jpg';

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  const loading = useSelector(content.selectors.isFetchingMovies);
  const error = useSelector(content.selectors.getMoviesError);
  const token = useSelector(authentication.selectors.isAuthorized);

  useEffect(() => {
    if (token) {
      dispatch(content.actions.fetchMovies());
    } else {
      dispatch(content.actions.fetchMovies({ free: true }));
    }
  }, [content]);

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
