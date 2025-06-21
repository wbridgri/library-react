// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/books">All Books</Link>
        <Link to="/add">Add Book</Link>
      </nav>
    </header>
  );
}

export default Header;