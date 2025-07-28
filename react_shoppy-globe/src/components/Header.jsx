import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-wide hover:text-yellow-300 transition"
          >
            ShoppyGlobe
          </Link>

          {/* Navigation Links */}
          <div className="hidden sm:flex gap-6 text-lg font-medium">
            <Link
              className="hover:text-yellow-300 transition"
              to="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-yellow-300 transition"
              to="/cart"
            >
              Cart
              <span className="ml-1 bg-yellow-400 text-blue-900 px-2 py-0.5 rounded text-sm font-semibold">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
