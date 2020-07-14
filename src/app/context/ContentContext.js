import React, { createContext, useCallback, useState } from 'react';

const ContentContext = createContext([]);

const ContentProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movieId, isFavorite) => {
    return isFavorite
      ? setFavorites(favorites.filter((id) => id !== movieId))
      : setFavorites([...favorites, movieId]);
  };

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://academy-video-api.herokuapp.com/content/items',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authorization: localStorage.getItem('token'),
          },
        }
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError(e);
    }
  }, [setError, setLoading, setData]);

  const fetchSingleMovie = useCallback(
    async (movieId) => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://academy-video-api.herokuapp.com/content/items/${movieId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              authorization: localStorage.getItem('token'),
            },
          }
        );
        if (!response.ok) {
          throw setError({ error: response });
        }
        const movie = await response.json();
        // setData(data.find((m) => m.id === movie.id) ? data : [...data, movie]);
        setData([...data, movie]);
        setLoading(false);
        console.log(data);
      } catch (e) {
        console.log(e);
        setLoading(false);
        setError(e);
      }
    },
    [setError, setLoading, setData]
  );

  return (
    <ContentContext.Provider
      value={{
        data,
        loading,
        error,
        fetchMovies,
        favorites,
        toggleFavorite,
        fetchSingleMovie,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export { ContentProvider, ContentContext };
