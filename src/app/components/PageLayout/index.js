import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

function PageLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Switch>
        <Footer />

        <Route path="*">
          <footer>Footer</footer>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default PageLayout;
