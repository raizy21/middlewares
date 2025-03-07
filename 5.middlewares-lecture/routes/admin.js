import express from "express";

const adminRouter = express.Router();

adminRouter.use((req, res, next) => {
  console.log("admin middleware");
  if (Math.random() > 0.5) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
});

adminRouter.get("/dashboard", (req, res) => {
  res.send("admin dashboard");
});

export default adminRouter;
