import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute(props) {
  // console.log('privateRoute', token);
  console.log('privateRoute', props);
  const location = useLocation();
  // const token = localStorage.getItem('token');
  if (props.token) {
    // console.log('Proceed');
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
    token,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
