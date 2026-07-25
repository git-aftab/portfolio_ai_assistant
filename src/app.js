import express from "express";
import errorHandler from "./middleware/error.middleware.js";
import morgan from "morgan";
import cors from "cors";
import logger from "./utils/logger.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  cors({
    origin: (origin, callback) => {
      const allowed = process.env.CORS_ORIGIN?.split(",") || [
        "http://localhost:5173",
      ];
      // allow requests with no origin (Postman, mobile apps)
      if (!origin || allowed.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  }),
);

// Routes Imports
import queryRoute from "./routes/chat.route.js";

// Routes
app.use("/api/v1/chat", queryRoute);



app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Portfolio assistant" });
});

app.use(errorHandler);

export default app;
