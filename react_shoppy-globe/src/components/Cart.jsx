import { useSelector } from 'react-redux';
import CartItem from './CartItem';

export default function Cart() {
  const items = useSelector(state => state.cart.items);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
