import { queryLLM, getAnalytics } from "../controllers/chat.controller.js";
import { Router } from "express";

const router = Router();

router.route("/query-llm").post(queryLLM);
router.route("/analytics").get(getAnalytics);

export default router;