const express = require("express");
const app = express();

app.use(express.json());

// ✅ ADD THIS LINE (VERY IMPORTANT)
let posts = [{ id: 1, title: "Old title", body: "Old content" }];
// PUT — update post
app.patch("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);

  posts = posts.map((post) => {
    if (post.id === id) {
      return { ...post, ...req.body, id: post.id };
    }
    return post;
  });

  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  res.json(posts);
});
// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
