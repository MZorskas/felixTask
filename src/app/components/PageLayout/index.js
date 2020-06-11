import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

function PageLayout({ children }) {
  return (
    <React.Fragment>
      <div class="App">
        <Header />
        <main>{children}</main>
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
