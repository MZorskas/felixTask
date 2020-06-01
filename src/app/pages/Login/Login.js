import React from 'react';
import './index.scss';

import Button from '../../components/Button';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    error: false,
    token: '',
  };

  togglePasswordVisibility = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  login = async (e) => {
    e.preventDefault();

    const response = await fetch(
      'https://academy-video-api.herokuapp.com/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response;
      })
      .then(async (response) => {
        // console.log(response);
        const token = await response.json();
        console.log(token);
        return localStorage.setItem('token', token.token);
      })
      .catch(async (e) => {
        console.log(await e.json());
      });
  };

  render = () => {
    const { showPassword } = this.state;
    // console.log({ showPassword });
    return (
      <div className="login">
        <div class="loginBox">
          <form id="login-form" onSubmit={this.login}>
            <h3>Username</h3>
            <input
              onChange={(event) => {
                this.setState({ username: event.target.value });
              }}
              type="text"
              placeholder="Username"
              name="username"
            />
            <h3>Password</h3>
            <input
              onChange={(event) => {
                this.setState({ password: event.target.value });
              }}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              name="password"
            />
            <i
              className={`fa ${
                showPassword ? 'fa-eye-slash' : 'fa-eye'
              } password-icon`}
              onClick={this.togglePasswordVisibility}
            />
          </form>
          <Button type="submit" form="login-form" value="Submit">
            Sign In
          </Button>
        </div>
      </div>
    );
  };
}

export default Login;
