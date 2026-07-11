import express from "express";
import errorHandler from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
import queryRoute from "./routes/chat.route.js";

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Portfolio assistant" });
});

app.use(errorHandler);

export default app;
