
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'library-db'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database.');
});

module.exports = connection;