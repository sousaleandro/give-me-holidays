import { useState } from 'react';

function useFetch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchApi(fn, ...args) {
    try {
      setLoading(true);
      const data = await fn(...args);
      return data;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    return fetchApi;
  }
  return { loading, error, fetchApi };
}

export default useFetch;
