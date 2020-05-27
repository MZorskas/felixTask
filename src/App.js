import React from 'react';
import './App.css';

//Components

import Button from './components/Button';
import Separator from './components/Separator';
import Title from './components/Title';
import Banner from './components/Banner';
import MovieBlock from './components/MovieBlock';
import CreditCard from './components/CreditCard';
// import ContactBlock from './components/ContactBlock';

// Images

import HeroImage from './images/Hero.jpg';
import avengers from './images/avengers.jpg';
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
        <div className="moviesContainer">
          <MovieBlock
            placeHolder={avengers}
            href="http://localhost:3000"
            title="Avengers: Endgame"
          >
            <p>
              After the devastating events of Avengers: Infinity War, the
              universe is in ruins due to the efforts of the Mad Titan, Thanos.
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos' actions and restore order to the
              universe once and for all, no matter what consequences may be in
              store.
            </p>
          </MovieBlock>
          <MovieBlock
            placeHolder={avengers}
            href="http://localhost:3000"
            title="Avengers: Endgame"
          >
            <p>
              After the devastating events of Avengers: Infinity War, the
              universe is in ruins due to the efforts of the Mad Titan, Thanos.
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos' actions and restore order to the
              universe once and for all, no matter what consequences may be in
              store.
            </p>
          </MovieBlock>
          <MovieBlock
            placeHolder={avengers}
            href="http://localhost:3000"
            title="Avengers: Endgame"
          >
            <p>
              After the devastating events of Avengers: Infinity War, the
              universe is in ruins due to the efforts of the Mad Titan, Thanos.
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos' actions and restore order to the
              universe once and for all, no matter what consequences may be in
              store.
            </p>
          </MovieBlock>
          <MovieBlock
            placeHolder={avengers}
            href="http://localhost:3000"
            title="Avengers: Endgame"
          >
            <p>
              After the devastating events of Avengers: Infinity War, the
              universe is in ruins due to the efforts of the Mad Titan, Thanos.
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos' actions and restore order to the
              universe once and for all, no matter what consequences may be in
              store.
            </p>
          </MovieBlock>
          <MovieBlock
            placeHolder={avengers}
            href="http://localhost:3000"
            title="Avengers: Endgame"
          >
            <p>
              After the devastating events of Avengers: Infinity War, the
              universe is in ruins due to the efforts of the Mad Titan, Thanos.
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos' actions and restore order to the
              universe once and for all, no matter what consequences may be in
              store.
            </p>
          </MovieBlock>
          <MovieBlock
            placeHolder={avengers}
            href="http://localhost:3000"
            title="Avengers: Endgame"
          >
            <p>
              After the devastating events of Avengers: Infinity War, the
              universe is in ruins due to the efforts of the Mad Titan, Thanos.
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos' actions and restore order to the
              universe once and for all, no matter what consequences may be in
              store.
            </p>
          </MovieBlock>
        </div>
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
