// pages/AllBooks.js
import React, { useEffect, useState } from 'react';
import { api } from '../api';
import BookCard from '../components/BookCard';

function AllBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get('/')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Books</h2>
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default AllBooks;