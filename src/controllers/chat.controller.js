import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { askAi } from "../services/chat.service.js";


const queryLLM = asyncHandler(async (req, res) => {
  console.log(req.body);
  const {message} = req.body;
  console.log("message: ", message);
  console.log("message: ", message.trim());

  if (!message.trim() ) {
    throw new ApiError(400, "Message is required");
  }
//   console.log("message: ", message.trim());

  const llmResponse = await askAi(message.trim());
  
  if(!llmResponse) {
    throw new ApiError(500, "Failed to generate response from LLM");
  }

  console.log("llmResponse: ", llmResponse);

  res
    .status(200)
    .json(new ApiResponse(200, "LLM response generated successfully", llmResponse));
});

export { queryLLM };
