import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [pending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    const jwtToken = localStorage.getItem('accessToken');

    const headers = {
      'Content-Type': 'application/json',
    };

    if (jwtToken) {
      headers['Authorization'] = `Bearer ${jwtToken}`;
    }

    fetch(url, {
      signal: abortCont.signal,
      headers: headers,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, pending, error };
};

export default useFetch;
