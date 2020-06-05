import React, { useState, useCallback, useEffect } from 'react';
import './index.scss';
import { useParams } from 'react-router-dom';
//Components

import MovieContainer from '../../components/MovieContainer';

function Movie(props) {
  const { movieId } = useParams();
  // console.log('MoviePage', params);

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { toggleFavorite, favorites } = props;
  // const getMovie = useCallback(async () => {
  //   const response = await fetch(
  //     `https://academy-video-api.herokuapp.com/content/items/${movieId}`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         authorization: localStorage.getItem('token'),
  //       },
  //     }
  //   );
  //   if (!response.ok) {
  //     throw setError({ error: response });
  //   }
  //   const data = await response.json();
  //   setMovie(data);
  //   setLoading(false);
  //   console.log(data);
  // }, [setMovie]);

  const getMovie = useCallback(() => {
    fetch(`https://academy-video-api.herokuapp.com/content/items/${movieId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw setError(response);
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
  }, [setMovie, setLoading]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <React.Fragment>
      <div className="Movie">
        <MovieContainer
          title={movie.title}
          placeHolder={movie.image}
          toggleFavorite={() => toggleFavorite(movie.id)}
          movieId={movie.id}
          isFavorite={favorites.includes(movie.id) && true}
          video={movie.video}
        >
          <p>{movie.description}</p>
        </MovieContainer>
      </div>
    </React.Fragment>
  );
}

export default Movie;
