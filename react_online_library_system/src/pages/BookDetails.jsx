import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state) => state.books.list.find((b) => b.id === parseInt(id)));
  if (!book) return <p>Book not found!</p>;

  return (
    <div className="p-6">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <Link to="/books" className="text-blue-500">Back to Browse</Link>
    </div>
  );
}
