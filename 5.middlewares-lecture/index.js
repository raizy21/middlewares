import express from "express";
import cors from "cors";
import adminRouter from "./routes/admin.js";

const app = express();
const port = process.env.PORT || 3000;

const logger = (req, res, next) => {
  const { method, url, body, data, test } = req;
  console.log(`${method} - ${url}`);
  console.log({ body });
  console.log({ data });
  console.log({ test });
  next();
};

const json = (req, res, next) => {
  try {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk.toString();
    });

    req.on("end", () => {
      req.data = JSON.parse(data);
      next();
    });
  } catch (error) {
    res.send(error.message);
  }
};

app.use(cors());
app.use(express.json());
// app.use(json);
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", logger, (req, res) => {
  res.send("users");
});

app.use("/admin", adminRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
