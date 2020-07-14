import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import './index.scss';
import Button from '../Button';
import Loader from '../Loader';
import content from '../../../content/';
import authentication from '../../../authentication';

function MovieContainer() {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const loading = useSelector(content.selectors.isFetchingMovies);
  const error = useSelector(content.selectors.getMoviesError);
  const movie = useSelector((state) =>
    content.selectors.isMovieFetched(state, movieId)
  );
  const isFavorite = useSelector((state) =>
    content.selectors.isFavoriteById(state, movieId)
  );

  // const token = useSelector(state.authentication.token);

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleFavorite = () => {
    dispatch(content.actions.toggleFavorite(movieId, isFavorite));
  };
  useEffect(() => {
    console.log('MovieContainer movie', movie);
    if (!movie) {
      dispatch(content.actions.fetchSingleMovie(movieId));
      console.log('Fetching movie');
    }
  }, [movie, movieId, content]);

  console.log('MovieContainer movie', movie);
  return (
    <div className="movieContainer">
      {loading && <Loader text="Loading Movie"></Loader>}

      {!!movie && (
        <>
          <Modal
            isOpen={modal}
            onRequestClose={toggleModal}
            className="Modal"
            overlayClassName="Overlay"
          >
            <iframe
              title={`${movie.title} trailer`}
              src={movie.video}
              frameborder="0"
              allowfullscreen="true"
            />
          </Modal>
          <div className="img-container">
            <img className="" src={movie.image} alt="Movie" loading="lazy" />
          </div>
          <div className="movie-info">
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <div className="buttons">
              <Button buttonSize="btn--large" onClick={() => toggleModal()}>
                Watch
              </Button>
              <Button
                buttonSize="btn--large"
                onClick={toggleFavorite}
                buttonStyle={isFavorite && 'btn--primary--outline'}
              >
                {isFavorite ? 'Remove' : 'Favorite'}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieContainer;
