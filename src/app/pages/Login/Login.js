import React from 'react';
import './index.scss';

import Button from '../../components/Button';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showPassword: false,
    };
  }

  togglePasswordVisibility = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  login = async (e) => {
    e.preventDefault();
    console.log(this.props);
    fetch('https://academy-video-api.herokuapp.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        this.props.history.replace('/content');
      })
      .catch((e) => {
        console.log(e);
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

export default withRouter(Login);
