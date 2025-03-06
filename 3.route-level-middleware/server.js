import express from "express";

const app = express();
const router = express.Router();

const logMiddleware = (req, res, next) => {
  console.log("Route-level middleware");
  next();
};

router.use(logMiddleware);

router.get("/", (req, res) => {
  res.send("Hello from the route!");
});

app.use("/route", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
