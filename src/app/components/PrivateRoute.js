import React from 'react';
import { Route, Redirect, useLocation, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ token, ...props }) {
  // console.log('privateRoute', props);

  const location = useLocation();
  const Params = useParams();
  // const token = localStorage.getItem('token');
  console.log('PrivateRoute', Params);
  if (token) {
    // console.log('Proceed');
    return <Route {...props} />;
  }

  console.log('Will redirect');

  return (
    <Redirect to={{ pathname: '/login', state: { referrer: location } }} />
  );
}

function mapStateToProps({ content: { movies }, authentication: { token } }) {
  // console.log('PrivateRoute, mapStateToProps', token);
  return {
    movies,
    token,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
