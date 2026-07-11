import { qdrant } from "../db/qdrantDb.js";
import {} from "../utils/constants.js";
import crypto from "crypto";

export const storeEmbeddings = async (
  title,
  source,
  type,
  heading,
  chunkIndex,
  chunkText,
) => {
  try {
    await qdrant.upsert("portfolio-assistant", {
      wait: true,
      points: [
        {
          id: crypto.randomUUID(),
          vector: embedding,
          payload: {
            title,
            chunkText,
            chunkIndex,
          },
        },
      ],
    });
  } catch (error) {
    console.error("Qdrant store failed:", error.message);
    throw error;
  }
};

export const searchEmbedding = async (queryText, source) => {
  const results = await qdrant.query("portfolio-assistant", {
    query: queryText,
    limit: 3,
    with_payload: true,
  });
  return results;
};
