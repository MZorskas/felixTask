import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';
import './index.scss';
import Button from '../Button';
import Loader from '../Loader';
import content from '../../../content/';
// import useFetch from '../useFetch';

function MovieContainer({
  isFavorite,
  movie,
  toggleFavorite,
  movieId,
  loading,
  error,
  fetchSingleMovie,
}) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    // console.log('MODAL', modal);
  };

  // const { payload, fetching } = useFetch({
  //   endpoint: `content/items/${movieId}`,
  //   headers: {
  //     authorization: token,
  //   },
  //   shouldFetch: !movie,
  // });

  // useEffect(() => {
  //   if (payload) {
  //     setMovie(payload);
  //   }
  // }, [setMovie, loadMovie, payload]);

  useEffect(() => {
    console.log('MovieContainer', movie);
    if (!movie) {
      fetchSingleMovie(movieId);
      console.log('Fetching movie');
    }
  }, [movie, movieId, fetchSingleMovie]);

  return (
    <div className="movieContainer">
      {loading && <Loader text="Loading Movie"></Loader>}
      {error && <p>{error}</p>}

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
      loading: content.selectors.isFetchingMovies(state),
      error: content.selectors.getMoviesError(state),
      movie: content.selectors.isMovieFetched(state, movieId),
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
      fetchSingleMovie: bindActionCreators(
        content.actions.fetchSingleMovie,
        dispatch
      ),
    };
  }
);

export default enhance(MovieContainer);
