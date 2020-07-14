import React from 'react';
import {
  Route,
  Redirect,
  useLocation,
  useHistory,
  useParams,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import authentication from '../../authentication';

function PrivateRoute(props) {
  const isAuthorized = useSelector(authentication.selectors.isAuthorized);
  const location = useLocation();

  console.log('PrivateRoute', location);
  if (isAuthorized) {
    // console.log('Proceed');
    return <Route {...props} />;
  }

  console.log('Will redirect');

  return (
    <Redirect to={{ pathname: '/login', state: { referrer: location } }} />
  );
}

export default PrivateRoute;
