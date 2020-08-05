import React, { useEffect, useContext } from 'react';

import { useHistory, useLocation } from 'react-router-dom';

// Context
import { UserContext } from '../context/UserContext';

// Components
import LoginForm from '../components/LoginForm';

function Login() {
  const { token } = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (token) {
      history.replace(
        location.state ? location.state.referrer.pathname : '/content'
      );
    }
  }, [token]);

  return (
    <div className="login">
      <LoginForm />
    </div>
  );
}

export default Login;
