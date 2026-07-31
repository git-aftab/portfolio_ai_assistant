import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    responseTime: {
      type: Number,
    },
    ip: {
      type: String,
    },
    userAgent: {
      type: String,
    },
    success: {
      type: Boolean,
      default: false,
    },
    promptTokens: {
      type: Number,
    },
    completionTokens: {
      type: Number,
    },
    totalTokens: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);
