import React, { useEffect, useContext } from 'react';

//Redux
import { ContentContext } from '../context/ContentContext';

//Components
import MoviesContainer from '../components/MoviesContainer';
import Loader from '../components/Loader';

function Content() {
  const { fetchMovies, loading, error } = useContext(ContentContext);

  useEffect(() => {
    fetchMovies();
  }, []);

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
