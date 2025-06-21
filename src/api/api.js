import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5000/api/books', // Change to your actual backend URL
});