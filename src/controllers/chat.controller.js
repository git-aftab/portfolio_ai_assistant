import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { askAi } from "../services/chat.service.js";


const queryLLM = asyncHandler(async (req, res) => {
  console.log(req.body);
  const {query, history = []} = req.body;
  console.log("query: ", query);
  console.log("query: ", query.trim());

  if (!query.trim() ) {
    throw new ApiError(400, "query is required");
  }
//   console.log("query: ", query.trim());

  const llmResponse = await askAi(query.trim(), history);
  
  if(!llmResponse) {
    throw new ApiError(500, "Failed to generate response from LLM");
  }

  console.log("llmResponse: ", llmResponse);

  res
    .status(200)
    .json(new ApiResponse(200, "LLM response generated successfully", llmResponse));
});

export { queryLLM };
