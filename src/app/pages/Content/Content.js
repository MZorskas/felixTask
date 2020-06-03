import React from 'react';
import './index.scss';

import MoviesContainer from '../../components/MoviesContainer';

class Content extends React.Component {
  state = {
    movies: [],
    loading: true,
    error: '',
  };

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    const response = await fetch(
      'https://academy-video-api.herokuapp.com/content/items',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('token'),
        },
      }
    );
    if (!response.ok) {
      throw this.setState({ error: response });
    }
    const data = await response.json();

    this.setState({ movies: data, loading: false });
  }

  addFavorite = (id) => {
    !this.state.favorites.includes(id)
      ? this.setState({ favorites: [...this.state.favorites, id] })
      : this.setState({
          favorites: this.state.favorites.filter((favorite) => favorite !== id),
        });
    console.log(this.state.favorites);
  };

  render = () => {
    const { favorites, addFavorite } = this.props;
    console.log('propsai', this.props);
    // console.log({ showPassword });
    return (
      <React.Fragment>
        <MoviesContainer
          movies={this.state.movies}
          favorites={favorites}
          loading={this.state.loading}
          addFavorite={addFavorite}
        />
      </React.Fragment>
    );
  };
}

export default Content;
