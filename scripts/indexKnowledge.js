import fs from "fs/promises";
import path from "path";
import {
  chunkText,
  cleanTranscript,
  approximateTokens,
} from "../src/services/chunking.service.js";
import { generateEmbedding } from "../src/services/embedding.service.js";
import { storeEmbedding } from "../src/services/qdrant.service.js";


const KNOWLEDGE_DIR = "./src/knowledge"; //node looks from root directory for knowledge folder
const uploadPortfolioDataToQdrant = async (query) => {
  const files = await fs.readdir(KNOWLEDGE_DIR);

  for (const file of files) {
    const content = await fs.readFile(path.join(KNOWLEDGE_DIR, file), "utf-8");
    console.log(file);

    const chunks = chunkText(content);

    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];

      const embedding = await generateEmbedding(chunk.content);

      await storeEmbedding({
        embedding,
        title: file.replace(".md", ""),
        source: file,
        type: "markdown",
        chunkIndex: chunk.id,
        chunkText: chunk.content,
      });
    }
  }
};

uploadPortfolioDataToQdrant();

export {};
