import React from 'react';
import './index.css';
import MovieBlock from '../MovieBlock';
import loading from '../../images/loading.svg';

class MoviesContainer extends React.Component {
  //   async componentDidMount() {
  //     const url = 'https://academy-video-api.herokuapp.com/content/free-items';
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  //   }
  state = {
    movies: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.getFreeMovies();
  }

  async getFreeMovies() {
    const url = 'https://academy-video-api.herokuapp.com/content/free-items';
    const response = await fetch(url);
    // if (!response.ok) {
    //   throw 'fetch failed';
    // }
    const data = await response.json();

    this.setState({ movies: data, loading: false });
    console.log(data);
    // console.log(this.state.data);
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
                key={movie.id}
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
