import React from 'react';
import './index.scss';

import CreditCard from '../CreditCard';

// Images

import visa from '../../images/Visa.svg';
import mastercard from '../../images/Mastercard.png';
import amex from '../../images/Amex.png';
import discover from '../../images/Discover.jpg';

function Footer() {
  return (
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
  );
}

export default Footer;
