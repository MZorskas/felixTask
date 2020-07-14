import React, { useEffect, useState, useRef, useContext } from 'react';
import './index.scss';

import { useHistory, useLocation } from 'react-router-dom';

// Context
import { UserContext } from '../../context/UserContext';

// Components
import Button from '../../components/Button';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef();

  const { login, token, error, loading } = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const submitRef = useRef(null);

  // const refs = [usernameRef, passwordRef];

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  useEffect(() => {
    alert('You can login using username: tester password: netflix');
  }, []);

  useEffect(() => {
    usernameRef.current.focus();
    if (token) {
      history.replace(
        location.state ? location.state.referrer.pathname : '/content'
      );
    }
  }, [token]);

  return (
    <div className="login">
      <div className="loginBox">
        <form id="login-form" onSubmit={handleSubmit}>
          <h3>Username</h3>
          <input
            ref={usernameRef}
            // onKeyDown={onKeyDown}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            type="text"
            placeholder="Username"
            name="username"
          />
          <h3>Password</h3>
          <input
            ref={passwordRef}
            // onKeyDown={onKeyDown}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            name="password"
          />
          {!!error && <h3 style={{ color: 'red' }}>{error}</h3>}
          <i
            className={`fa ${
              showPassword ? 'fa-eye-slash' : 'fa-eye'
            } password-icon`}
            onClick={togglePasswordVisibility}
          />
        </form>
        <Button form="login-form">{loading ? 'Loading...' : 'Sign In'}</Button>
      </div>
    </div>
  );
}

export default Login;
