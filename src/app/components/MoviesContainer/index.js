import React from 'react';
import './index.scss';
import MovieBlock from '../MovieBlock';
import loading from '../../images/loading.svg';

class MoviesContainer extends React.Component {
  addFavorite = (id) => {
    this.props.addFavorite(id);
  };

  render() {
    const { movies, favorites, loading } = this.props;
    console.log('moviesContainer', this.props);
    console.log(movies);
    return (
      <div className="MoviesContainer">
        {loading ? (
          <div className="loader">
            <img src={loading} alt="Loading..." />
          </div>
        ) : (
          movies.map((movie) => {
            return (
              <MovieBlock
                title={movie.title}
                placeHolder={movie.image}
                onClick={() => this.addFavorite(movie.id)}
                isFavorite={favorites.includes(movie.id) && true}
              >
                <p>{movie.description}</p>
              </MovieBlock>
            );
          })
        )}
      </div>
    );
  }
}

export default MoviesContainer;
