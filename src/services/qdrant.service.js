import { qdrant } from "../db/qdrantDb.js";
import crypto from "crypto";

export const storeEmbedding = async ({
  embedding,
  title,
  source,
  type,
  chunkIndex,
  chunkText,
}) => {
  try {
    await qdrant.upsert("portfolio-assistant", {
      wait: true,
      points: [
        {
          id: crypto.randomUUID(),
          vector: embedding,

          payload: {
            title,
            source,
            type,
            chunkIndex,
            chunkText,
          },
        },
      ],
    });
  } catch (error) {
    console.error("Qdrant store failed:", error.message);
    throw error;
  }
};

export const searchEmbedding = async (queryEmbedding) => {
  try {
    const results = await qdrant.query("portfolio-assistant", {
      query: queryEmbedding,
      limit: 3,
      with_payload: true,
    });

    return results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
