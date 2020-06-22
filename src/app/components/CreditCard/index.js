import React from 'react';
import './index.scss';

function CreditCard({ placeHolder, alt, href }) {
  return (
    <React.Fragment>
      <li className="CreditCard">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={placeHolder} alt={alt}></img>
        </a>
      </li>
    </React.Fragment>
  );
}

export default CreditCard;
