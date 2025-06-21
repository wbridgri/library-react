// routes/books.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all books
router.get('/', (req, res) => {
  db.query('SELECT * FROM books', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Get book by ID
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM books WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send('Book not found');
    res.json(results[0]);
  });
});

// Create new book
router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).send('Title is required');
  db.query('INSERT INTO books (title) VALUES (?)', [title], (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: results.insertId, title });
  });
});

// Update book
router.put('/:id', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).send('Title is required');
  db.query('UPDATE books SET title = ? WHERE id = ?', [title, req.params.id], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.affectedRows === 0) return res.status(404).send('Book not found');
    res.json({ id: req.params.id, title });
  });
});

module.exports = router;