import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';
import { useState } from 'react';

export default function ProductList() {
  const { products, error } = useFetchProducts();
  const [search, setSearch] = useState('');

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <input
        placeholder="Search products..."
        className="w-full border p-2 rounded mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {error && <p className="text-red-600">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
