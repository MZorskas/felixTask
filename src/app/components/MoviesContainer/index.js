import React from 'react';
import './index.scss';
import MovieBlock from '../MovieBlock';
import loading from '../../images/loading.svg';

class MoviesContainer extends React.Component {
  state = {
    movies: [],
    favorites: [],
    loading: true,
    error: null,
    url: localStorage.getItem('token')
      ? 'https://academy-video-api.herokuapp.com/content/items'
      : 'https://academy-video-api.herokuapp.com/content/free-items',
  };

  componentDidMount() {
    this.getFreeMovies();
  }

  addFavorite = (id) => {
    console.log(id);
    console.log(this.state.favorites);
    !this.state.favorites.includes(id)
      ? this.setState({ favorites: [...this.state.favorites, id] })
      : this.setState({
          favorites: this.state.favorites.filter((favorite) => favorite !== id),
        });
    console.log(this.state.favorites);
  };

  async getFreeMovies() {
    console.log(this.state.url);
    console.log(this.state.token);
    const response = await fetch(this.state.url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    });
    // if (!response.ok) {
    //   throw 'fetch failed';
    // }
    const data = await response.json();

    this.setState({ movies: data, loading: false });
    console.log(data);
    // console.log(this.state.data);
    console.log(this.state);
  }

  //   children, title, placeHolder, href
  render() {
    return (
      <div className="MoviesContainer">
        {this.state.loading ? (
          <div className="loader">
            <img src={loading} alt="Loading..." />
          </div>
        ) : (
          this.state.movies.map((movie) => {
            return (
              <MovieBlock
                title={movie.title}
                placeHolder={movie.image}
                onClick={() => this.addFavorite(movie.id)}
                isFavorite={
                  this.state.favorites.includes(movie.id) ? true : false
                }
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
