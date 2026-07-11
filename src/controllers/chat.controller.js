import {ApiError} from "../utils/apiError.js"
import {ApiResponse} from "../utils/apiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {queryLLMService} from "../services/chat.service.js"

const queryLLM = asyncHandler(async (req, res)=>{
    const query = req.body;

    if(!query || !query.query){
        throw new ApiError(400, "Query is required");
    }
})

export {queryLLM}