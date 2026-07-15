import axios from "axios";
import { EMBEDDING_MODEL, } from "../utils/constants.js";

export const generateEmbedding = async(text, task = "retrieval.passage") => {
  try {
    // console.log("E_mode", EMBEDDING_MODEL);
    // console.log("Key", process.env.JINA_API_KEY);
    
    const res = await axios.post(
      "https://api.jina.ai/v1/embeddings",
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
      error.response?.data || error.message,
    );
    console.log(error.config?.url);
    console.log(error.response?.status);
    console.log(error.response?.data);
    throw error;
  }
};
