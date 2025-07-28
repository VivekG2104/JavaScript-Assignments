import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
  const [form, setForm] = useState({ title: '', author: '', category: '', description: '', rating: '' });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.category) {
      setError('All fields are required!');
      return;
    }
    dispatch(addBook({ ...form, id: Date.now() }));
    navigate('/books');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl">Add New Book</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="grid gap-4 mt-4">
        <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Author" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
        <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
        <input placeholder="Rating" type="number" value={form.rating} onChange={(e) => setForm({ ...form, rating: e.target.value })} />
        <button className="bg-blue-500 text-white p-2">Add Book</button>
      </form>
    </div>
  );
}
