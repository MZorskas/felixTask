import React from 'react';
import './index.scss';
import loadingImg from '../../images/loading.svg';

function Loader({ text }) {
  return (
    <div className="loader">
      <img src={loadingImg} alt="Loading..." />
      <p>{text}</p>
    </div>
  );
}

export default Loader;
