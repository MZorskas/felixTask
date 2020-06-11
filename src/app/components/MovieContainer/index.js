import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import './index.scss';
import Button from '../Button';
import loadingImg from '../../images/loading.svg';

function MovieContainer({
  loadMovie,
  getMovie,
  toggleFavorite,
  favorites,
  movies,
}) {
  console.log('x', favorites, getMovie);
  const { movieId } = useParams();
  const [modal, setModal] = useState(false);
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log('MODAL', modal);
  };

  const fetchMovie = useCallback(() => {
    fetch(`https://academy-video-api.herokuapp.com/content/items/${movieId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((response) => {
        const data = response;
        setMovie(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setLoading, movieId]);

  // const movie = getMovie(movieId);
  // console.log(movie);
  console.log('movie', movie);
  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  return (
    <div className="movieContainer">
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

      {!!loading ? (
        <div className="loader">
          <img src={loadingImg} alt="Loading..." />
        </div>
      ) : (
        <>
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
                onClick={() => toggleFavorite(movieId)}
                buttonStyle={
                  favorites.includes(movie.id) && 'btn--primary--outline'
                }
              >
                {favorites.includes(movie.id) ? 'Remove' : 'Favorite'}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function mapStateToProps({ content, authentication }) {
  console.log('MovieContainer, mapStateToProps', content);
  // console.log('MovieContainer, mapStateToProps', props);
  return {
    favorites: content.favorites,
    getMovie: (movieId) => content.movies.find((movie) => movie.id === movieId),
    // movies: content.movies,
    token: authentication.token,
  };
}

function mapDispatchToProps(dispatch) {
  // console.log('MovieBlock, mapDispatchToProps', dispatch);
  return {
    toggleFavorite: (id) => dispatch({ type: 'TOGGLE_FAVORITE', id }),
    loadMovie: (data) => dispatch({ type: 'LOAD_MOVIE', data }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
