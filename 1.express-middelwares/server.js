import express from "express";

const app = express();

// Application-level middleware
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

// Route handler
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
