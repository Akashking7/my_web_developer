const express = require("express");
const app = express();

const posts = [
  { id: 1, title: "Hello World", body: "My first post" },
  { id: 2, title: "Node.js Tips", body: "Express is great" },
];

// GET all posts
app.get("/api/posts", (req, res) => {
  res.status(200).json({ success: true, data: posts });
});

// GET single post by ID  (:id = route param)
app.get("/api/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post)
    return res.status(404).json({ success: false, msg: "Post not found" });
  res.status(200).json({ success: true, data: post });
});

app.listen(3000, () => console.log("Server running on port 3000"));
