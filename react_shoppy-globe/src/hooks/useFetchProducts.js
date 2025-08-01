import { useState, useEffect } from 'react';

export default function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => setError(err.message));
  }, []);

  return { products, error };
}
