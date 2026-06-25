import axios from "axios";
import { EMBEDDING_MODEL, EMBEDDING_DIMENSION } from "../utils/constants.js";

export const generateEmbedding = (text, task = "retrieval.passage") => {
  try {
    const res = axios.post(
      "https://jina.ai/v1/embeddings",
      {
        model: EMBEDDING_MODEL,
        task,
        normalized: true,
        input: [text],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.JINA_API_KEY}`,
          "Content-Type": "applicatiion.json",
        },
      },
    );
    console.log("Embedding Dim:", res.data.data[0].embedding.length);

    return res.data.data[0].embedding;
  } catch (error) {
    console.error(
      "Embedding Generation failed",
      error.res?.data || error.message,
    );
    throw error;
  }
};
