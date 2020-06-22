import React, { useEffect } from 'react';
import './index.scss';
import Button from '../Button';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import authentication from '../../../authentication';

function Header({ logoutUser, token, isAuthorized }) {
  const history = useHistory();
  const location = useLocation();

  const handleLogout = () => {
    logoutUser(token);
  };

  return (
    <header className="App-header">
      <nav className="Navbar">
        <Link to="/" className="Logo">
          FELIX
        </Link>
        <div className="NavigationLinks">
          {location.pathname != '/favorites' && (
            <Button to="/favorites" buttonStyle="btn--primary--solid">
              Favorites
            </Button>
          )}

          {isAuthorized && location.pathname != '/content' && (
            <Button to="/content" buttonStyle="btn--primary--solid">
              Content
            </Button>
          )}

          {!isAuthorized ? (
            <Button to="/login" buttonStyle="btn--primary--solid">
              Sign In
            </Button>
          ) : (
            <Button buttonStyle="btn--primary--solid" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}

const enhance = connect(
  (state) => {
    return {
      // movies: content.movies,
      loading: authentication.selectors.isLogoutLoading(state),
      error: authentication.selectors.getLogoutError(state),
      token: state.authentication.token,
      isAuthorized: !!authentication.selectors.isAuthorized(state),
    };
  },
  (dispatch) => {
    return {
      logoutUser: bindActionCreators(
        authentication.actions.logoutUser,
        dispatch
      ),
    };
  }
);

export default enhance(Header);
