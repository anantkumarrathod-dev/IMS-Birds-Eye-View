const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const pagePath = path.join(__dirname, "index.html");

app.get("/", (req, res) => {
  res.sendFile(pagePath);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
