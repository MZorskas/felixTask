import React, { useCallback } from 'react';
import './index.scss';
import Button from '../Button';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import authentication from '../../../authentication';

function Header({ logoutUser, token }) {
  const history = useHistory();
  // const location = useLocation();

  const logout = useCallback(() => {
    fetch('https://academy-video-api.herokuapp.com/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        localStorage.removeItem('token');
        logoutUser();
        console.log('token removed');
        history.replace('/');
      })
      .catch((e) => {
        console.log(e);
      });
  }, [history, logoutUser, token]);
  // console.log('header', location);
  // console.log('header', history);
  return (
    <header className="App-header">
      <nav className="Navbar">
        <Link to="/" className="Logo" href="http://localhost:3000">
          FELIX
        </Link>
        <div className="NavigationLinks">
          {token && (
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

function mapStateToProps({ authentication: { token } }) {
  // console.log('Logout, mapStateToProps', token);
  return {
    token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => dispatch({ type: authentication.types.USER_LOGOUT }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
