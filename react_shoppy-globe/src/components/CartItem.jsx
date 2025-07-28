import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg shadow-md p-4 mb-4 flex flex-col sm:flex-row items-center justify-between bg-white">
      {/* Left: Product details */}
      <div className="flex items-center gap-4 mb-3 sm:mb-0">
        {item.thumbnail && (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-20 h-20 object-cover rounded-md border"
          />
        )}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          <p className="text-gray-600">Price: <span className="font-bold">${item.price}</span></p>
        </div>
      </div>

      {/* Right: Quantity and Remove Button */}
      <div className="flex items-center gap-3">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) =>
            dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
          }
          className="w-16 p-2 border rounded-md text-center focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-red-500 font-medium hover:text-red-700 transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
