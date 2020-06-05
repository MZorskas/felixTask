import React from 'react';
import './index.scss';
import MovieBlock from '../MovieBlock';
import loadingImg from '../../images/loading.svg';
import { Route } from 'react-router-dom';
import Movie from '../../pages/Movie/Movie';

function MoviesContainer(props) {
  // const addFavorite = (id) => {
  //   props.addFavorite(id);
  // };

  const { movies, favorites, loading, toggleFavorite } = props;
  // console.log('moviesContainer', props);
  // console.log(favorites);
  return (
    <div className="MoviesContainer">
      {loading ? (
        <div className="loader">
          <img src={loadingImg} alt="Loading..." />
        </div>
      ) : (
        movies.map((movie) => {
          return (
            <MovieBlock
              title={movie.title}
              placeHolder={movie.image}
              onClick={() => toggleFavorite(movie.id)}
              movieId={movie.id}
              isFavorite={favorites.includes(movie.id) && true}
            >
              <p>{movie.description}</p>
            </MovieBlock>
          );
        })
      )}

      <Route path={`/content/:movieId`}>
        <Movie />
      </Route>
    </div>
  );
}

export default MoviesContainer;
