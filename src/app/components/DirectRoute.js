import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
// import { useParams } from 'react-router-dom';

function DirectRoute({ movies }, props) {
  // const { movieId } = useParams();
  // console.log('privateRoute', token);

  console.log('privateRoute', movies);
  // console.log('privateRoute', props);

  const movie = movies.find((movie) => {
    return movie.id === location.state.movieId;
  });

  console.log('privateRoute', movie);
  const token = localStorage.getItem('token');

  if (movie) {
    console.log('Proceed');
    return <Route {...props} />;
  }

  console.log('Will redirect');

  return (
    <Redirect to={{ pathname: '/login', state: { referrer: location } }} />
  );
}

function mapStateToProps({ content: { movies }, authentication: { token } }) {
  console.log('Home, mapStateToProps', movies);
  return {
    movies,
  };
}

export default connect(mapStateToProps)(DirectRoute);
