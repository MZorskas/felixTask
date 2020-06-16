import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import './index.scss';
import Button from '../Button';
import loadingImg from '../../images/loading.svg';
import content from '../../../content/';
import useFetch from '../useFetch';

function MovieContainer({
  isFavorite,
  isFetched,
  toggleFavorite,
  movieId,
  token,
  loadMovie,
  getMovie,
}) {
  // const { movieId } = useParams();
  const [modal, setModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(isFetched ? isFetched : false);
  console.log('MOVIECONTAINER isFetched', isFetched);
  console.log('MOVIECONTAINER MOVIE', movie);
  // console.log('blalblablabla', toggleFavorite);
  // console.log('blalblablabla', movieId);
  const toggleModal = () => {
    setModal(!modal);
    console.log('MODAL', modal);
  };
  // const { loading, error, payload: movie } = useFetch({
  //   endpoint: `content/items/${movieId}`,
  //   defaultPayload: {},
  //   headers: {
  //     authorization: token,
  //   },
  // });

  // const fetchMovie = useCallback(() => {
  //   fetch(`https://academy-video-api.herokuapp.com/content/items/${movieId}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       authorization: localStorage.getItem('token'),
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw response;
  //       }
  //       return response.json();
  //     })
  //     .then((response) => {
  //       const data = response;
  //       setMovie(data);
  //       setLoading(false);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, [setLoading]);

  // const movie = getMovie(movieId);
  // console.log(movie);
  // console.log('movie', movie);

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
      // setLoading(fetching);
      console.log('Payload true');
    }
  }, [setMovie, payload]);

  return (
    <div className="movieContainer">
      {!!movie && !!loading ? (
        <div className="loader">
          <img src={loadingImg} alt="Loading..." />
        </div>
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
                onClick={() => toggleFavorite(movieId)}
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

function mapStateToProps(state, { movieId }) {
  console.log('movieContainer999', state);
  // console.log('MovieContainer, mapStateToProps', content);
  // console.log('MovieContainer, mapStateToProps', props);

  return {
    // movies: content.movies,
    isFetched: content.selectors.isMovieFetched(state, movieId),
    isFavorite: content.selectors.isFavoriteById(state, movieId),
    token: state.authentication.token,
  };
}

function mapDispatchToProps(dispatch) {
  // console.log('MovieBlock, mapDispatchToProps', dispatch);
  return {
    toggleFavorite: (id) =>
      dispatch({ type: content.types.TOGGLE_FAVORITE, id }),
    loadMovie: (data) => dispatch({ type: content.types.SAVE_MOVIE, data }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
