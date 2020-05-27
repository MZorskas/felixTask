import React from 'react';
import './index.css';

function CreditCard({ placeHolder, alt, href }) {
  return (
    <React.Fragment>
      <li className="CreditCard">
        <a className href={href} target="_blank">
          <img src={placeHolder} alt={alt}></img>
        </a>
      </li>
    </React.Fragment>
  );
}

export default CreditCard;
