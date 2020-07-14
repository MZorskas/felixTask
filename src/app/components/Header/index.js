import React, { useContext } from 'react';
import './index.scss';
import { Link, useLocation } from 'react-router-dom';

// Context
import { UserContext } from '../../context/UserContext';

// Components
import Button from '../Button';
function Header() {
  const location = useLocation();

  const { logout, token } = useContext(UserContext);

  const handleLogout = () => {
    logout(token);
  };

  console.log('Header', { logout, token });
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

          {token && location.pathname != '/content' && (
            <Button to="/content" buttonStyle="btn--primary--solid">
              Content
            </Button>
          )}

          {!token ? (
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

export default Header;
