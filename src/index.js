import dotenv from "dotenv";
import connectToMongoDB from "./db/mongoDb.js";
import app from "./app.js";
import logger from "./utils/logger.js";

const PORT = process.env.PORT || 3000;


connectToMongoDB().then(() => {
  logger.info(`MongoDB connection established successfully.`);
  
  app.listen(PORT,()=>{
    logger.info(`Server is running on port ${PORT}`);
  })
}).catch(error => {
  logger.error(`Failed to connect to MongoDB: ${error.message}`);
  process.exit(1); // Exit the process with an error code
});