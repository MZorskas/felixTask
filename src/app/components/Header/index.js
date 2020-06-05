import React, { useCallback } from 'react';
import './index.scss';
import Button from '../Button';
import { Link, useHistory, useLocation } from 'react-router-dom';

function Header() {
  const history = useHistory();
  const location = useLocation();

  const logout = useCallback(() => {
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
        history.replace('/');
      })
      .catch((e) => {
        console.log(e);
      });
  }, [history]);
  console.log('header', location);
  console.log('header', history);
  return (
    <header className="App-header">
      <nav className="Navbar">
        <Link to="/" className="Logo" href="http://localhost:3000">
          FELIX
        </Link>
        <div className="NavigationLinks">
          {location.pathname.includes('/content/') && (
            <Button to="/content" buttonStyle="btn--primary--solid">
              Content
            </Button>
          )}

          {localStorage.token === undefined ? (
            <Button to="/login" buttonStyle="btn--primary--solid">
              Sign In
            </Button>
          ) : (
            <Button buttonStyle="btn--primary--solid" onClick={logout}>
              Logout
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
