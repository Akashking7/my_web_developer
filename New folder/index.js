const express = require("express");
const app = express();

let posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" }
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.listen(3000);