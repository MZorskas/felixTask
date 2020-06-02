import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss';
import PageLayout from './components/PageLayout';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Content from './pages/Content/Content';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
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
        </Switch>
      </PageLayout>
    </Router>
  );
}

export default App;
