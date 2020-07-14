import React, { useContext } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

// Context
import { UserContext } from '../context/UserContext';

function PrivateRoute(props) {
  const location = useLocation();
  const { token } = useContext(UserContext);

  if (token) {
    // console.log('Proceed');
    return <Route {...props} />;
  }

  console.log('Will redirect');

  return (
    <Redirect to={{ pathname: '/login', state: { referrer: location } }} />
  );
}

export default PrivateRoute;
