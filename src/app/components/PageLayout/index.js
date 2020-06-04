import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

function PageLayout({ props, children }) {
  console.log('PageLayout', props);
  console.log('PageLayout', props);
  const history = useHistory();
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
