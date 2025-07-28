import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function BrowseBooks() {
  const { category } = useParams();
  const allBooks = useSelector((state) => state.books.list);
  const [search, setSearch] = useState('');

  const filtered = allBooks.filter(
    (b) =>
      (!category || b.category.toLowerCase() === category.toLowerCase()) &&
      (b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search by title or author"
        className="border p-2 mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid gap-4">
        {filtered.map((book) => (
          <div key={book.id} className="border p-4">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <Link to={`/book/${book.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
