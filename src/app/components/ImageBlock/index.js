import React from 'react';
import './index.scss';

function ImageBlock({ placeHolder }) {
  return (
    <div className="Image">
      <image src={placeHolder} />
    </div>
  );
}

export default ImageBlock;
