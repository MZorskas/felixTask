import React from 'react';
import useStyles from './styles.jsx';

function CreditCard({ placeHolder, alt, href }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <li className={classes.CreditCard}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={placeHolder} alt={alt}></img>
        </a>
      </li>
    </React.Fragment>
  );
}

export default CreditCard;
