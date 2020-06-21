import React, { useEffect, useState, useCallback, useRef } from 'react';
import './index.scss';
import { bindActionCreators } from 'redux';
import Button from '../../components/Button';
import { useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import authentication from '../../../authentication';

function Login({ loginUser, loading, error, isAuthorized, token }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef();

  const history = useHistory();
  const location = useLocation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const submitRef = useRef(null);

  const refs = [usernameRef, passwordRef];

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(username, password);
  };

  useEffect(() => {
    usernameRef.current.focus();
    if (isAuthorized) {
      localStorage.setItem('token', token);
      console.log('location', location);
      history.replace(
        location.state ? location.state.referrer.pathname : '/content'
      );
    }
  }, [isAuthorized, token]);
  // console.log('History', history);
  // console.log('Location', location);
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      for (let i = 0; i < refs.length; i++) {
        if (!refs[i].current.value) {
          refs[i].current.focus();
          break;
        }
      }
    }
  };

  // const login = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     fetch('https://academy-video-api.herokuapp.com/auth/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         username: username,
  //         password: password,
  //       }),
  //     })
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw setError('Wrong credentials!');
  //         }
  //         return response.json();
  //       })
  //       .then((response) => {
  //         console.log('loginFetch', response);
  //         localStorage.setItem('token', response.token);
  //         loginUser(response.token);
  //         history.replace(
  //           location.state ? location.state.referrer.pathname : '/content'
  //         );
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   },
  //   [username, password, history, loginUser, location.state]
  // );

  return (
    <div className="login">
      <div class="loginBox">
        <form id="login-form" onSubmit={handleSubmit}>
          <h3>Username</h3>
          <input
            ref={usernameRef}
            onKeyDown={onKeyDown}
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
            onKeyDown={onKeyDown}
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
        <Button ref={submitRef} form="login-form">
          {loading ? 'Loading...' : 'Sign In'}
        </Button>
      </div>
    </div>
  );
}

const enhance = connect(
  (state) => {
    return {
      loading: authentication.selectors.isLoginIn(state),
      error: authentication.selectors.getLoginError(state),
      token: state.authentication.token,
      isAuthorized: !!authentication.selectors.isAuthorized(state),
    };
  },
  (dispatch) => {
    return {
      loginUser: bindActionCreators(authentication.actions.loginUser, dispatch),
    };
  }
);

export default enhance(Login);
