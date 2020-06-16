import { useCallback, useEffect, useState } from 'react';

const useFetch = ({
  endpoint,
  method = 'GET',
  defaultPayload = null,
  headers,
  shouldFetch = true,
}) => {
  const [fetching, setFetching] = useState(false);
  const [payload, setPayload] = useState(defaultPayload);
  const [error, setError] = useState(null);
  console.log('INside useFetch hook', shouldFetch);

  const fetchPayload = useCallback(() => {
    setFetching(true);
    fetch(`https://academy-video-api.herokuapp.com/${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw setError('Error fetching data');
        }
        return response.json();
      })
      .then((response) => {
        const data = response;
        setPayload(data);
        setFetching(false);
        console.log('Fetching');
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setPayload, setFetching, setError, headers, endpoint, method]);

  useEffect(() => {
    if (shouldFetch === true) {
      console.log('Fetch useEffect', shouldFetch);
      fetchPayload();
    }
  }, [fetchPayload, shouldFetch]);

  return {
    error,
    payload,
    fetching,
  };
};

export default useFetch;
