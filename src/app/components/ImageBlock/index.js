import React from 'react';
import './index.scss';

const STYLES = ['btn--primary-solid', 'btn--primary--outline'];

const SIZES = ['btn--medium', 'btn--small', 'btn--large'];

function ImageBlock({ placeHolder, position }) {
  return (
    <div className="Image">
      <image src={placeHolder} />
    </div>
  );
}

export default ImageBlock;
