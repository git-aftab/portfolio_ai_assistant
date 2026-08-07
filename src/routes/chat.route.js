import { queryLLM, getAnalytics } from "../controllers/chat.controller.js";
import { verifyAdmin } from "../middleware/verifyAdmin.middleware.js";
import { Router } from "express";

const router = Router();

router.route("/query-llm").post(queryLLM);
router.route("/analytics").get(verifyAdmin,getAnalytics);

export default router;