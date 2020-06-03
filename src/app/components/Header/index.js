import React from 'react';
import './index.scss';
import Button from '../Button';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  // logout = async (e) => {
  //   e.preventDefault();
  //   console.log(this.props);
  //   fetch('https://academy-video-api.herokuapp.com/auth/logout', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       token: localStorage.getItem('token'),
  //     }),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw response;
  //       }
  //       return response.json();
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       localStorage.removeItem('token');
  //       this.props.history.replace('/');
  //       console.log("token removed");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  render = () => {
    console.log('Header', localStorage.getItem('token'));
    return (
      <header className="App-header">
        <nav className="Navbar">
          <Link to="/" className="Logo" href="http://localhost:3000">
            FELIX
          </Link>
          <Button
            to={this.props.location.pathname !== '/' ? '/' : '/login'}
            buttonStyle="btn--primary--solid"
            onClick={localStorage.getItem('token') && (() => this.logout)}
          >
            {this.props.location.pathname === '/content' ? 'Logout' : 'Sign In'}
          </Button>
        </nav>
      </header>
    );
  };
}

export default withRouter(Header);
