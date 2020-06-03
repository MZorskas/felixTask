import React from 'react';
import './index.scss';
import { withRouter } from 'react-router-dom';

//Components

import Button from '../../components/Button';
import Separator from '../../components/Separator';
import Banner from '../../components/Banner';
import MoviesContainer from '../../components/MoviesContainer';

// Images

import HeroImage from '../../images/Hero.jpg';

// import Twitter from '../../images/twitter.svg';
// import Github from '../../images/github.svg';

// let loading = true;

class Home extends React.Component {
  state = {
    movies: [],
    loading: true,
    error: '',
  };

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    console.log('fetchas', this.props);
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
    // console.log('Fetchas', this.props.movies);
    // console.log('Fetchas', data);
    // this.props.movies = data;

    this.setState({ movies: data, loading: false });
    // !!this.props.loading
    //   ? (this.props.loading = false)
    //   : (this.props.loading = true);

    // this.setState({ movies: data, loading: false });
  }

  render() {
    const { favorites, addFavorite, loading } = this.props;
    console.log('homePage', this.props);

    return (
      <React.Fragment>
        <Banner placeHolder={HeroImage} title="Wanna more Content?"></Banner>
        <Separator />
        <MoviesContainer
          movies={this.state.movies}
          favorites={favorites}
          loading={this.state.loading}
          addFavorite={addFavorite}
        />
        <div className="btnContainer">
          <Button buttonStyle="btn--primary--solid" buttonSize="btn--large">
            Get More Content
          </Button>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(Home);
