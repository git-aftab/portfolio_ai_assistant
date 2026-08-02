import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { askAi } from "../services/chat.service.js";
import Analytics from "../models/analytics.model.js";
import { Completions } from "groq-sdk/resources";
import { APIError } from "groq-sdk";

const queryLLM = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { query, history = [] } = req.body;
  console.log("query: ", query.trim());

  if (!query.trim()) {
    throw new ApiError(400, "query is required");
  }

  const normalizedQuestion = query
    .trim()
    .toLowerCase()
    .replace(/[.,!?;:]/g, "")
    .replace(/\s+/g, " ");

  const startTime = Date.now();
  const llmResponse = await askAi(query.trim(), history);

  const endTime = Date.now();
  const responseTime = endTime - startTime;

  if (!llmResponse) {
    throw new ApiError(500, "Failed to generate response from LLM");
  }

  // Save analytics data to MongoDB
  const analyticsData = await Analytics.create({
    question: query.trim(),
    normalizedQuestion,
    answer: llmResponse,
    responseTime,
    ip: req.ip,
    userAgent: req.headers["user-agent"],
    success: true,
    promptTokens: llmResponse.promptTokens,
    completionTokens: llmResponse.completionTokens,
    totalTokens: llmResponse.totalTokens,
  });

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        "LLM response generated successfully",
        analyticsData,
      ),
    );
});

const getAnalytics = asyncHandler(async (req, res) => {
  const analyticsData = await Analytics.aggregate([
    {
      $facet: {
        overview: [
          {
            $group: {
              _id: null,
              totalQueries: { $sum: 1 },
              averageResponseTime: { $avg: "$responseTime" },
              totalPromptTokens: { $sum: "$promptTokens" },
              totalCompletionTokens: { $sum: "$completionTokens" },
              totalTokens: { $sum: "$totalTokens" },
            },
          },
        ],

        topQuestions: [
          {
            $group: {
              _id: "$normalizedQuestion",
              count: { $sum: 1 },
            },
          },
          {
            $sort: { count: -1 },
          },
          {
            $limit: 10,
          },
        ],
      },
    },
  ]);

  if (!analyticsData) {
    throw new APIError(500, "Something went wrong");
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        "Analytics data retrieved successfully",
        analyticsData[0],
      ),
    );
});

export { queryLLM, getAnalytics };
