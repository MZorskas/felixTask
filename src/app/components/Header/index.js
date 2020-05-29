import React from 'react';
import './index.scss';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Header({ placeHolder, title }) {
  return (
    <header className="App-header">
      <nav className="Navbar">
        <Link to="/" className="Logo" href="http://localhost:3000">
          FELIX
        </Link>
        <Button to="/login" buttonStyle="btn--primary--solid">
          Sign In
        </Button>
      </nav>
    </header>
  );
}

export default Header;
