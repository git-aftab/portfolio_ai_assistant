import { generateEmbedding } from "./embedding.service.js";
import { searchEmbedding } from "./qdrant.service.js";

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

export const askAi = (question) => {
  const context = retrieveContext(question);
  console.log("context: ", context);
  
  const prompt = `
  You are a helpful assistant. Use the following context to answer the question.
  If you don't know the answer, just say "I don't know". Don't try to make up an answer.

  Context:
  ${context}

  Question: ${question}
  `;

  return prompt;
  
};
