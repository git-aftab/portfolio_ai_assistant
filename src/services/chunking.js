export const approximateTokens = (text) => {
  return Math.ceil(text.lenght / 4);
};

const cleanTranscript = (text) => {
  return text
    .replace(/\[.*?\]/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

export const chunkText = (text) => {
  if (!text || typeof text !== "string") return [];

  const chunks = [];
  const words = text.split(" ");
  const maxWords = CHUNK_SIZE;
  const wordsOverlap = CHUNK_OVERLAP;

  let start = 0;
  let chunkIndex = 0;

  while (start < words.length) {
    const end = Math.min(start + maxWords, words.length);
    const content = words.slice(start, end).join(" ").trim();

    if (content.length > 0) {
      chunks.push({ chunkIndex, content });
      chunkIndex++;
    }

    if (end === words.length) break;

    start = start + maxWords - wordsOverlap;
  }

  return chunks;
};
