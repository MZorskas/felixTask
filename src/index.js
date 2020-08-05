import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Router } from 'react-router-dom';
import history from './app/components/history';
import { ThemeProvider } from './app/context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
