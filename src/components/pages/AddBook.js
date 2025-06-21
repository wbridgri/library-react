import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    api.post('/', formData)
      .then(() => navigate('/books'))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6 space-y-4">
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="w-full border p-2" />
      <input name="author" placeholder="Author" value={formData.author} onChange={handleChange} className="w-full border p-2" />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full border p-2" />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Add Book</button>
    </form>
  );
}

export default AddBook;