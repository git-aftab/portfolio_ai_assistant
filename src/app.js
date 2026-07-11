import express from "express";

const app = express;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Portfolio assistant" });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    status: "error",
    message: message,
    errors: err.errors || [],
    data: null,
  });
});

export default app;
