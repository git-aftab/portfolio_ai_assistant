import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { askAi } from "../services/chat.service.js";


const queryLLM = asyncHandler(async (req, res) => {
  const {query} = req.body;
  console.log("query: ", query.trim());

  if (!query ) {
    throw new ApiError(400, "Query is required");
  }
//   console.log("query: ", query.trim());

  const llmResponse = await askAi(query);
  
  if(!llmResponse) {
    throw new ApiError(500, "Failed to generate response from LLM");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "LLM response generated successfully", llmResponse));
});

export { queryLLM };
