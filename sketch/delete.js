const express = require("express");
const app = express();

app.use(express.json());

// ✅ ADD THIS LINE (VERY IMPORTANT)
let posts = [
  {
    id: 1,
    title: "Old title",
    body: "Old content",
  },
  {
    id: 2,
    title: "king title",
    body: "Old content",
  },
  {
    id: 3,
    title: "Old akash",
    body: "Old content",
  },
];
// PUT — update post
app.delete("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);

  posts = posts.filter((post) => post.id !== id);

  res.send("Post deleted");
});

app.get("/posts/:id", (req, res) => {
  res.json(posts);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
