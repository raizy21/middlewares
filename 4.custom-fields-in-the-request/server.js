import express from "express";

const app = express();

// Application-level middleware
app.use((req, res, next) => {
  req.customProperty = "Hello :D";
  next();
});

// Route handler
app.get("/", (req, res) => {
  res.send(req.customProperty);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
