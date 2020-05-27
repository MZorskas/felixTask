import React from 'react';
import './App.css';

//Components

import Button from './components/Button';
import Separator from './components/Separator';
import Banner from './components/Banner';
import CreditCard from './components/CreditCard';
import MoviesContainer from './components/MoviesContainer';

// Images

import HeroImage from './images/Hero.jpg';
import visa from './images/Visa.svg';
import mastercard from './images/Mastercard.png';
import amex from './images/Amex.png';
import discover from './images/Discover.jpg';
// import Twitter from './images/twitter.svg';
// import Github from './images/github.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="Navbar">
          <a href="http://localhost:3000">F</a>
          <Button buttonStyle="btn--primary--solid">Sign In</Button>
        </nav>
      </header>
      <main>
        <Banner placeHolder={HeroImage} title="Wanna more Content?"></Banner>
        <Separator />
        <MoviesContainer></MoviesContainer>
        <div className="btnContainer">
          <Button buttonStyle="btn--primary--solid" buttonSize="btn--large">
            Get More Content
          </Button>
        </div>
      </main>
      <footer className="App-footer">
        <span>
          We care about your entertainment. Copyright © 2019–2020 felix.com
        </span>
        <div className="credit-cards">
          <ul className="cards-list">
            <CreditCard placeHolder={visa} href="http://localhost:3000" />
            <CreditCard placeHolder={mastercard} href="http://localhost:3000" />
            <CreditCard placeHolder={discover} href="http://localhost:3000" />
            <CreditCard placeHolder={amex} href="http://localhost:3000" />
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
