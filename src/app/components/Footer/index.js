import React from 'react';
import useStyles from './styles.jsx';

import CreditCard from '../CreditCard';

// Images
import visa from '../../images/Visa.svg';
import mastercard from '../../images/Mastercard.png';
import amex from '../../images/Amex.png';
import discover from '../../images/Discover.jpg';

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.Footer}>
      <p>We care about your entertainment. Copyright © 2019–2020 felix.com</p>
      <ul className={classes.CardList}>
        <CreditCard placeHolder={visa} href="http://localhost:3000" />
        <CreditCard placeHolder={mastercard} href="http://localhost:3000" />
        <CreditCard placeHolder={discover} href="http://localhost:3000" />
        <CreditCard placeHolder={amex} href="http://localhost:3000" />
      </ul>
    </footer>
  );
}

export default Footer;
