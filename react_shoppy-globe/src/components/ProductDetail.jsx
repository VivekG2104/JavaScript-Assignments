import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct)
      .catch(console.error);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))} className="bg-green-600 text-white p-2 mt-2">
        Add to Cart
      </button>
    </div>
  );
}
