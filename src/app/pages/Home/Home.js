import React from 'react';
import './index.scss';

//Components
import Header from '../../components/Header';
import Button from '../../components/Button';
import Separator from '../../components/Separator';
import Banner from '../../components/Banner';
import CreditCard from '../../components/CreditCard';
import MoviesContainer from '../../components/MoviesContainer';

// Images

import HeroImage from '../../images/Hero.jpg';

// import Twitter from '../../images/twitter.svg';
// import Github from '../../images/github.svg';

function App() {
  return (
    <React.Fragment>
      <Banner placeHolder={HeroImage} title="Wanna more Content?"></Banner>
      <Separator />
      <MoviesContainer></MoviesContainer>
      <div className="btnContainer">
        <Button buttonStyle="btn--primary--solid" buttonSize="btn--large">
          Get More Content
        </Button>
      </div>
    </React.Fragment>
  );
}

export default App;
