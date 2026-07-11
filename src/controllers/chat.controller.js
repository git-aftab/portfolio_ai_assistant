import {ApiError} from "../utils/apiError"
import {ApiResponse} from "../utils/apiResponse"
import {asyncHandler} from "../utils/asyncHandler"
import {queryLLMService} from "../services/chat.service.js"

export const queryLLM = asyncHandler(async (req, res)=>{
    const query = req.body;

    if(!query || !query.query){
        throw new ApiError(400, "Query is required");
    }
})

