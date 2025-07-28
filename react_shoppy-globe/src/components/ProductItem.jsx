import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg shadow p-4 hover:shadow-lg transition duration-200">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <h3 className="text-lg font-semibold truncate">{product.title}</h3>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
      >
        Add to Cart
      </button>
      <Link
        to={`/product/${product.id}`}
        className="block mt-2 text-blue-500 hover:underline text-center"
      >
        View Details
      </Link>
    </div>
  );
}
