import React, { createContext, useCallback, useState } from 'react';
import history from '../components/history';

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const login = useCallback(async (username, password) => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://academy-video-api.herokuapp.com/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      const token = await response.json();
      setLoading(false);
      setToken(token.token);
      localStorage.setItem('token', token.token);
    } catch (e) {
      setLoading(true);
      setError(e);
      console.log(e);
    }
  }, []);

  const logout = useCallback(async (token) => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://academy-video-api.herokuapp.com/auth/logout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token,
          }),
        }
      );
      if (!response.ok) {
        throw response;
      }
      localStorage.clear();
      setToken('');
      setLoading(false);
      console.log('token removed');
      history.replace('/');
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }, []);

  return (
    <UserContext.Provider value={{ login, logout, token, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
