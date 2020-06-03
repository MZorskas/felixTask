import React from 'react';
import './index.scss';
import MovieBlock from '../MovieBlock';
import loading from '../../images/loading.svg';

class MoviesContainer extends React.Component {
  // componentDidMount() {
  //   this.getMovies();
  // }

  // async getMovies() {
  //   console.log(this.state.url);
  //   console.log(this.state.token);
  //   const response = await fetch(this.state.url, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       authorization: localStorage.getItem('token'),
  //     },
  //   });
  //   if (!response.ok) {
  //     throw this.setState({ error: response });
  //   }
  //   const data = await response.json();

  //   this.setState({ movies: data, loading: false });
  //   console.log(data);
  //   // console.log(this.state.data);
  //   console.log(this.state);
  // }

  //   children, title, placeHolder, href

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
