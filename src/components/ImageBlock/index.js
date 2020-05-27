import React from 'react';
import './index.css';

const STYLES = ['btn--primary-solid', 'btn--primary--outline'];

const SIZES = ['btn--medium', 'btn--small', 'btn--large'];

function ImageBlock({ placeHolder, position }) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <div className="Image">
      <image src={placeHolder} />
    </div>
  );
}

export default ImageBlock;
