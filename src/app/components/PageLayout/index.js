import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.scss';
import Header from '../Header';
import Footer from '../Footer';

function PageLayout({ children }) {
  console.log('PageLayout', children);
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default PageLayout;
