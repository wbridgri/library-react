import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book }) {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h3 className="text-xl font-semibold">{book.title}</h3>
      <p>Author: {book.author}</p>
      <Link to={`/books/${book.id}`} className="text-blue-500">View Details</Link>
    </div>
  );
}

export default BookCard;