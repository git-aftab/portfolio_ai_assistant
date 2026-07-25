import Groq from "groq-sdk";
import logger from "../utils/logger.js";
import { CHAT_MODEL, GROQ_BASE_URL } from "../utils/constants.js";
import { SYSTEM_PROMPT } from "../../prompts/LLM_CONTEXT.js";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const callLLM = async (prompt) => {
  const completions = await groq.chat.completions.create({
    model: CHAT_MODEL,
    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPT
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  return completions.choices[0].message.content;
};
