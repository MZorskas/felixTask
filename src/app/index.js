import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

//Redux'o prodiver komponentas skirtas pasiekti store(GS) per connect()
import { Provider } from 'react-redux';

//Globalus state
import store from './state';

import './index.scss';
import PageLayout from './components/PageLayout';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Content from './pages/Content/Content';
import PrivateRoute from './components/PrivateRoute';
import Movie from './pages/Movie/Movie';

function App() {
  return (
    <Provider store={store}>
      <PageLayout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/content">
            <Content />
          </PrivateRoute>
          <PrivateRoute path="/content/:movieId">
            <Movie />
          </PrivateRoute>
          <Route exact path="*">
            <h1>Page not found</h1>
          </Route>
        </Switch>
      </PageLayout>
    </Provider>
  );
}

export default withRouter(App);
