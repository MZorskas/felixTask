import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.scss';
import Header from '../Header';
import Footer from '../Footer';

function PageLayout({ children }) {
  return (
    <React.Fragment>
      <div class="App">
        <Header />
        <main className="main">{children}</main>
        <Switch>
          <Route path="*">
            <Footer />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default PageLayout;
