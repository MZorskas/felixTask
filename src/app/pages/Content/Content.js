import React, { useEffect } from 'react';
import './index.scss';

//Redux
import { useSelector, useDispatch } from 'react-redux';

//Components
import MoviesContainer from '../../components/MoviesContainer';
import Loader from '../../components/Loader';

//Modules
import content from '../../../content';
import { useHistory } from 'react-router-dom';

function Content() {
  const history = useHistory();
  const dispatch = useDispatch();

  const loading = useSelector(content.selectors.isFetchingMovies);
  const error = useSelector(content.selectors.getMoviesError);

  useEffect(() => {
    dispatch(content.actions.fetchMovies());
  }, [content]);

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

export default Content;
