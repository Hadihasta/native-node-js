npm i express dotenv sequelize cors mysql nodemon
setup app.js 
create config db dan buat database dengan command node src/db/db.js
===> createSchema() hanya di pakai sekali 

setelah itu pakai createPool 
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "node_js_native_database",
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;




structure Maping

- app.js # Main application file
- routes/ # Route definitions
  - users.js
  - products.js
- controllers/ # Request handlers
  - userController.js
  - productController.js
- models/ # Data models
  - User.js
  - Product.js
- middleware/ # Custom middleware
  - auth.js
  - validation.js
- config/ # Configuration files
  - db.js
  - env.js
- utils/ # Utility functions
  - errorHandler.js