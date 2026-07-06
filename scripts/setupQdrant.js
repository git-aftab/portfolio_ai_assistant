import { qdrant } from "../src/db/qdrantDb.js";

const setupQdrant = async () => {
  await qdrant.createCollection("portfolio-assistant", {
    vectors: {
      size: 1024, 
      distance: "Cosine",
    },
  });

  await qdrant.createPayloadIndex("portfolio-assistant", {
    field_name: "source",
    field_schema: "keyword",
  });
};

setupQdrant();
