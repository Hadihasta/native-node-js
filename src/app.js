// app.ccaconst express = require("express");

const cors = require("cors");
const express = require('express');
const app = express();              // Create an Express application
const port = 3001

// Middleware configuration
app.use(express.json());            // Parse incoming JSON requests
app.use(express.urlencoded({ extended: false }));  // Parse URL-encoded data
app.use(cors());                    // Enable CORS for cross-origin requests


const userRouter = require('./routes/users');
// Use the routers
app.use('/users', userRouter);


app.get('/', (req, res) => {
  res.send('hello world');
});

// Respond to POST request on the root route
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

// Respond to GET request on the /about route
app.get('/about', (req, res) => {
  res.send('About page');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
module.exports = app;     