const mysql = require("mysql2/promise");

// async function createSchema() {
//   const connection = await mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "node_js_native_database", // database yang barusan kamu buat
//   });

//   // --- USERS TABLE ---
//   await connection.query(`
//     CREATE TABLE IF NOT EXISTS users (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       name VARCHAR(100) NOT NULL,
//       email VARCHAR(100) UNIQUE NOT NULL,
//       password VARCHAR(255) NOT NULL,
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     );
//   `);

//   // --- POSTS TABLE ---
//   await connection.query(`
//     CREATE TABLE IF NOT EXISTS posts (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       user_id INT NOT NULL,
//       title VARCHAR(255) NOT NULL,
//       content TEXT,
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//       FOREIGN KEY (user_id) REFERENCES users(id)
//     );
//   `);

//   console.log("Schema created!");
//   await connection.end();
// }

// createSchema();



const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "node_js_native_database",
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;
