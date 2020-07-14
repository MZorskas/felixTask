import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './index.scss';

// Context
import { ContentContext } from '../../context/ContentContext';

// Components
import Modal from 'react-modal';
import Button from '../Button';
import Loader from '../Loader';

function MovieContainer() {
  const { movieId } = useParams();

  const {
    data,
    favorites,
    toggleFavorite,
    fetchSingleMovie,
    loading,
  } = useContext(ContentContext);

  const isFavorite = favorites.includes(movieId);
  const movie = data.find((movie) => movie.id === movieId);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const Favorite = () => {
    toggleFavorite(movieId, isFavorite);
  };

  useEffect(() => {
    if (!movie) {
      fetchSingleMovie(movieId);
    }
  }, [movie, movieId]);

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
                onClick={Favorite}
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
