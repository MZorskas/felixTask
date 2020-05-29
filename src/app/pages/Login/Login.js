import React from 'react';
import './index.scss';

import Button from '../../components/Button';

let Username = null;
let Password = null;

class Login extends React.Component {
  state = {
    showPassword: false,
  };

  togglePasswordVisibility = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  submit = () => {
    alert(`Username: ${Username} and Password: ${Password}`);
  };
  render = () => {
    const { showPassword } = this.state;
    console.log({ showPassword });
    return (
      <div className="login">
        <div class="loginBox">
          <form id="login-form" onSubmit={this.submit}>
            <h3>Username</h3>
            <input
              onChange={(event) => {
                Username = event.target.value;
              }}
              type="text"
              placeholder="Username"
              name="username"
            />
            <h3>Password</h3>
            <input
              onChange={(event) => {
                Password = event.target.value;
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
