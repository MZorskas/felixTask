import React, { useState, useCallback } from 'react';
import './index.scss';

import Button from '../../components/Button';
import { useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

function Login({ loginUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();
  const location = useLocation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // console.log('History', history);
  // console.log('Location', location);

  const login = useCallback(
    (e) => {
      e.preventDefault();
      fetch('https://academy-video-api.herokuapp.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw setError('Wrong credentials!');
          }
          return response.json();
        })
        .then((response) => {
          console.log('loginFetch', response);
          localStorage.setItem('token', response.token);
          loginUser(response.token);
          history.replace(
            location.state ? location.state.referrer.pathname : '/content'
          );
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [username, password, history, loginUser, location.state]
  );

  return (
    <div className="login">
      <div class="loginBox">
        <form id="login-form" onSubmit={login}>
          <h3>Username</h3>
          <input
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            type="text"
            placeholder="Username"
            name="username"
          />
          <h3>Password</h3>
          <input
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
        <Button type="submit" form="login-form" value="Submit">
          Sign In
        </Button>
      </div>
    </div>
  );
}

function mapStateToProps({ authentication: { token } }) {
  console.log('Login, mapStateToProps', token);
  return {
    token,
  };
}

function mapDispatchToProps(dispatch) {
  // console.log('MovieBlock, mapDispatchToProps', dispatch);
  return {
    loginUser: (token) => dispatch({ type: 'USER_LOGIN', token }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
