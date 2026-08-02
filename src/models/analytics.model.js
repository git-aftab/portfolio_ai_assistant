import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    normalizedQuestion: {
      type: String,
      required: true,
      index: true,
    },
    answer: {
      type: Object,
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

const Analytics = mongoose.model("Analytics", analyticsSchema);

export default Analytics;
