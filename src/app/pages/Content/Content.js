import React from 'react';
import './index.scss';

import Button from '../../components/Button';
import MoviesContainer from '../../components/MoviesContainer';

class App extends React.Component {
  state = {};

  render = () => {
    // console.log({ showPassword });
    return (
      <React.Fragment>
        <MoviesContainer></MoviesContainer>
      </React.Fragment>
    );
  };
}

export default App;
