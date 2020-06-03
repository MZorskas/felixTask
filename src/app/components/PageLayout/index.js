import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

function PageLayout({ props, children }) {
  console.log('PageLayout', props);
  return (
    <React.Fragment>
      <div class="App">
        <Header {...props} />
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
