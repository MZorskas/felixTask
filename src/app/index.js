import React, { useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import './index.scss';
import PageLayout from './components/PageLayout';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Content from './pages/Content/Content';
import PrivateRoute from './components/PrivateRoute';
import Movie from './pages/Movie/Movie';

function App() {
  const [favorites, setFavorites] = useState([]);

  // addFavorite = (id) => {
  //   !this.state.favorites.includes(id)
  //     ? this.setState({ favorites: [...this.state.favorites, id] })
  //     : this.setState({
  //         favorites: this.state.favorites.filter((favorite) => favorite !== id),
  //       });
  //   console.log(this.state.favorites);
  // };

  const toggleFavorite = (id) => {
    !favorites.includes(id)
      ? setFavorites([...favorites, id])
      : setFavorites(favorites.filter((favorite) => favorite !== id));
    console.log(favorites);
  };

  return (
    <PageLayout>
      <Switch>
        <Route exact path="/">
          <Home favorites={favorites} toggleFavorite={toggleFavorite} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/content">
          <Content favorites={favorites} toggleFavorite={toggleFavorite} />
        </PrivateRoute>
        <PrivateRoute path="/content/:movieId">
          <Movie favorites={favorites} toggleFavorite={toggleFavorite} />
        </PrivateRoute>
        <Route exact path="*">
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </PageLayout>
  );
}
export default withRouter(App);
