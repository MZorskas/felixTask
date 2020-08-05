import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.scss';
import PageLayout from './components/PageLayout.js';
import Login from './pages/Login';
import Home from './pages/Home';
import Content from './pages/Content';
import Favorites from './pages/Favorites';
import PrivateRoute from './components/PrivateRoute';
import Movie from './pages/Movie';
import { UserProvider } from './context/UserContext';
import { ContentProvider } from './context/ContentContext';

import { ThemeContext } from './context/ThemeContext';
import red from '@material-ui/core/colors/red';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

function App(props) {
  const { currentTheme } = useContext(ThemeContext);

  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: red[500],
        dark: 'var(--black)',
        light: 'var(--grey)',
        contrastText: '#FFFFFF',
      },
    },
  });

  const lightTheme = createMuiTheme({
    palette: {
      primary: {
        main: red[500],
        dark: 'var(--white)',
        light: 'var(--lightGrey)',
        contrastText: '#000000',
      },
    },
  });

  return (
    <MuiThemeProvider theme={currentTheme === 'dark' ? lightTheme : darkTheme}>
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
    </MuiThemeProvider>
  );
}

export default App;
