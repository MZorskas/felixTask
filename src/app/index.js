import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss';
import PageLayout from './components/PageLayout';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

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
        </Switch>
      </PageLayout>
    </Router>
  );
}

export default App;
