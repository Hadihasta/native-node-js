// app.ccaconst express = require("express");
const cors = require("cors");
const app = express();              // Create an Express application
// Middleware configuration
app.use(express.json());            // Parse incoming JSON requests
app.use(express.urlencoded({ extended: false }));  // Parse URL-encoded data
app.use(cors());                    // Enable CORS for cross-origin requests
module.exports = app;     