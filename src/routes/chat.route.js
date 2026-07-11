import { queryLLM } from "../controllers/chat.controller.js";
import { Router } from "express";

const router = Router();

router.route("/query-llm").post(queryLLM);


export default router;