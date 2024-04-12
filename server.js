const express = require("express");
const app = express();
const port = 3000;

// Import your JSON data
const data = require("./output-1.json");

// Create a route to serve your JSON data
app.get("/api/data", (req, res) => {
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
