import { Link } from 'react-router-dom';
import { categories, books } from '../data/booksData';

export default function HomePage() {
  const popularBooks = books.slice(0, 4);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Online Library</h1>
      <h2 className="text-xl font-semibold">Categories</h2>
      <ul className="flex gap-4 mb-6">
        {categories.map((cat) => (
          <li key={cat}>
            <Link to={`/books/${cat.toLowerCase()}`}>{cat}</Link>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold">Popular Books</h2>
      <div className="grid grid-cols-2 gap-4">
        {popularBooks.map((book) => (
          <Link key={book.id} to={`/book/${book.id}`}>
            {book.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
