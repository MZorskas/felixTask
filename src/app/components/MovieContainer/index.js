import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';
import './index.scss';
import Button from '../Button';
import Loader from '../Loader';
import content from '../../../content/';
import useFetch from '../useFetch';

function MovieContainer({
  isFavorite,
  isFetched,
  toggleFavorite,
  movieId,
  token,
  loadMovie,
}) {
  const [modal, setModal] = useState(false);
  const [movie, setMovie] = useState(isFetched ? isFetched : false);
  // console.log('blalblablabla', toggleFavorite);
  // console.log('blalblablabla', movieId);
  const toggleModal = () => {
    setModal(!modal);
    // console.log('MODAL', modal);
  };

  const { payload, fetching } = useFetch({
    endpoint: `content/items/${movieId}`,
    headers: {
      authorization: token,
    },
    shouldFetch: !movie,
  });

  useEffect(() => {
    if (payload) {
      setMovie(payload);
    }
  }, [setMovie, loadMovie, payload]);

  return (
    <div className="movieContainer">
      {fetching ? (
        <Loader text="Loading Movie"></Loader>
      ) : (
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
                onClick={() => toggleFavorite(movieId, isFavorite)}
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

const enhance = connect(
  (state, { movieId }) => {
    console.log('Movie container', state, movieId);
    return {
      // movies: content.movies,
      isFetched: content.selectors.isMovieFetched(state, movieId),
      isFavorite: content.selectors.isFavoriteById(state, movieId),
      token: state.authentication.token,
    };
  },
  (dispatch) => {
    return {
      toggleFavorite: bindActionCreators(
        content.actions.toggleFavorite,
        dispatch
      ),
    };
  }
);

export default enhance(MovieContainer);
