import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

import './index.scss';
import PageLayout from './components/PageLayout';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Content from './pages/Content/Content';
import PrivateRoute from './components/PrivateRoute';

class App extends React.Component {
  state = {
    favorites: [],
  };

  addFavorite = (id) => {
    !this.state.favorites.includes(id)
      ? this.setState({ favorites: [...this.state.favorites, id] })
      : this.setState({
          favorites: this.state.favorites.filter((favorite) => favorite !== id),
        });
    console.log(this.state.favorites);
  };

  render() {
    return (
      <Router>
        <PageLayout>
          <Switch>
            <Route exact path="/">
              <Home
                movies={this.state.movies}
                favorites={this.state.favorites}
                addFavorite={this.addFavorite}
                loading={this.state.loading}
              />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/content">
              <Content
                movies={this.state.movies}
                favorites={this.state.favorites}
                loading={this.state.loading}
                addFavorite={this.addFavorite}
              />
            </PrivateRoute>
          </Switch>
        </PageLayout>
      </Router>
    );
  }
}
export default App;
