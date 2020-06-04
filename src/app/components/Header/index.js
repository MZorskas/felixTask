import React from 'react';
import './index.scss';
import Button from '../Button';
import { Link, withRouter, useHistory } from 'react-router-dom';

class Header extends React.Component {
  logout = () => {
    console.log('headerFetch', this.props);
    fetch('https://academy-video-api.herokuapp.com/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        localStorage.clear();
        console.log('token removed');
        this.props.history.replace('/');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render = () => {
    console.log('Header', this.props);
    const { history } = this.props;
    console.log('Header', localStorage.getItem('token'));
    return (
      <header className="App-header">
        <nav className="Navbar">
          <Link to="/" className="Logo" href="http://localhost:3000">
            FELIX
          </Link>
          {localStorage.token === undefined ? (
            <Button to="/login" buttonStyle="btn--primary--solid">
              Sign In
            </Button>
          ) : (
            <Button buttonStyle="btn--primary--solid" onClick={this.logout}>
              Logout
            </Button>
          )}
        </nav>
      </header>
    );
  };
}

export default withRouter(Header);
