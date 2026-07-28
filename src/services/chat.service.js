import { generateEmbedding } from "./embedding.service.js";
import { searchEmbedding } from "./qdrant.service.js";
import { callLLM } from "./callLLM.service.js";

const question = "Tell me about aftab";

const retrieveContext = async (question) => {
  const queryEmbedding = await generateEmbedding(question, "retrieval.query");

  const results = await searchEmbedding(queryEmbedding);

  const context = results.points
    .map((point) => {
      const p = point.payload;

      return `
        Source: ${p.title}
        Type: ${p.type}

        ${p.chunkText}
        `;
    })
    .join("\n--------------\n");
  console.log("Context:", context);

  return context;
};

export const askAi = async (question, history = []) => {
  const context = await retrieveContext(question);
  console.log("context: ", context);

  const prompt = `
  Context:
  ${context}

  chat history:
  ${history.map((h)=> `User: ${h.role}\nAI: ${h.content}`).join("\n")}

  Question: ${question}
  `;

  const llmResponse = await callLLM(prompt);

  return llmResponse;
};
