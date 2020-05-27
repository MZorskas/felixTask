import React from 'react';
import './index.css';
import Button from '../Button';

function Banner({ placeHolder, title }) {
  return (
    <div className="banner-container">
      <img src={placeHolder} alt="banner" />
      <div className="banner-overlay">
        <div className="banner-title">{title}</div>
        <Button buttonStyle="btn--primary--solid" buttonSize="btn--large">
          Get Access
        </Button>
      </div>
    </div>
  );
}

export default Banner;
