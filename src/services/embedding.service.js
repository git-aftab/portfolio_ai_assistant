import axios from "axios";
import { EMBEDDING_MODEL, } from "../utils/constants.js";

export const generateEmbedding = async(text, task = "retrieval.passage") => {
  try {
    const res = await axios.post(
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
          "Content-Type": "application/json",
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
