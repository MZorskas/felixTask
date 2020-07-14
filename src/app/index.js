import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.scss';
import PageLayout from './components/PageLayout';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Content from './pages/Content/Content';
import Favorites from './pages/Favorites/Favorites';
import PrivateRoute from './components/PrivateRoute';
import Movie from './pages/Movie/Movie';
import { UserProvider } from './context/UserContext';
import { ContentProvider } from './context/ContentContext';

function App(props) {
  return (
    <UserProvider>
      <ContentProvider>
        <PageLayout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
            <PrivateRoute exact path="/content">
              <Content />
            </PrivateRoute>
            <PrivateRoute path="/content/:movieId">
              <Movie />
            </PrivateRoute>
            <Route exact path="*">
              <h1 style={{ color: 'red' }}>Page not found</h1>
            </Route>
          </Switch>
        </PageLayout>
      </ContentProvider>
    </UserProvider>
  );
}

export default App;
