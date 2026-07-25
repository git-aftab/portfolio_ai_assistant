// import {
//   approximateTokens,
//   chunkText,
//   cleanTranscript,
// } from "../src/services/chunking";
import { generateEmbedding } from "../src/services/embedding.service.js";
import { searchEmbedding } from "../src/services/qdrant.service.js";
import {retrieveContext} from "../src/services/chat.service.js"

const embedding = await generateEmbedding(
  "Tell me about VideoTube",
  "retrieval.query",
);

const results = await searchEmbedding(embedding);

// console.log(JSON.stringify(results,null, 2));
console.dir(results, {
  depth: null,
  colors: true,
});
