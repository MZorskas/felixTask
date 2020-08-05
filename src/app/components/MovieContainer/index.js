import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import useStyles from './styles.jsx';
import Typography from '@material-ui/core/Typography';

// Context
import { ContentContext } from '../../context/ContentContext';

// Components
import Modal from 'react-modal';
import Button from '../Button';
import Loader from '../Loader';

function MovieContainer() {
  // console.log('movieContainer', Container);
  const { movieId } = useParams();
  const classes = useStyles();
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
    <Container maxWidth="md" className={classes.MovieContainer}>
      {loading && <Loader text="Loading Movie"></Loader>}

      {!!movie && (
        <>
          <Modal
            isOpen={modal}
            onRequestClose={toggleModal}
            className={classes.Modal}
            overlayClassName={classes.Overlay}
          >
            <iframe
              title={`${movie.title} trailer`}
              src={movie.video}
              frameborder="0"
              allowfullscreen="true"
            />
          </Modal>
          <div className={classes.ImgContainer}>
            <img className="" src={movie.image} alt="Movie" loading="lazy" />
          </div>
          <div className={classes.MovieInfo}>
            <Typography variant="h4" component="h4" fontWeight={700}>
              {movie.title}
            </Typography>
            {/* <h1>{movie.title}</h1> */}
            <p>{movie.description}</p>
            <div className={classes.Buttons}>
              <Button buttonSize="large" onClick={() => toggleModal()}>
                Watch
              </Button>
              <Button
                buttonSize="large"
                onClick={Favorite}
                buttonStyle={isFavorite && 'outline'}
              >
                {isFavorite ? 'Remove' : 'Favorite'}
              </Button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
}

export default MovieContainer;
