

const cors = require("cors");
const express = require('express');
const app = express();              // Create an Express application
const port = 3001

// Middleware configuration
app.use(express.json());            // Parse incoming JSON requests
app.use(express.urlencoded({ extended: false }));  // Parse URL-encoded data
app.use(cors());                    // Enable CORS for cross-origin requests

const  userRoutes = require('./routes/users')

app.use('/', userRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
module.exports = app;     