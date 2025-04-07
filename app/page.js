"use client";

import React, { useState } from "react";

// -------------------- Model --------------------
/**
 * A Question object should have:
 * - id: number
 * - prompt: string
 * - options: array of strings (for MCQ mode; empty for flashcards)
 * - correctIndex: number (if applicable)
 * - explanation: string
 */

// -------------------- Quiz Mode --------------------
const QuizMode = {
  MCQ: "MCQ",
  Flashcard: "Flashcard",
};

// Sample questions (replace with JSON file loading if needed)
const sampleQuestions = [
  {
    id: 1,
    prompt: "Which method best reflects intrinsic value?",
    options: [
      "Discounted Cash Flow (DCF)",
      "Comparable Companies",
      "Precedent Transactions",
      "Sum-of-the-Parts",
    ],
    correctIndex: 0,
    explanation:
      "DCF projects free cash flows and discounts them to present value to estimate intrinsic value.",
  },
  {
    id: 2,
    prompt: "In a DCF, what does the terminal value represent?",
    options: [
      "The value of cash flows beyond the projection period",
      "The current market price",
      "Total equity value",
      "Net income of the final year",
    ],
    correctIndex: 0,
    explanation:
      "Terminal value captures the value of all future cash flows beyond the explicit forecast period.",
  },
  {
    id: 3,
    prompt: "Flashcard: Define Free Cash Flow.",
    options: [],
    explanation:
      "Free Cash Flow is the cash a company generates after accounting for cash outflows to support operations and maintain capital assets.",
  },
  {
    id: 4,
    prompt:
      "Which valuation multiple is most useful for comparing companies within the same industry?",
    options: [
      "Price-to-Earnings (P/E)",
      "Enterprise Value/EBITDA",
      "Price-to-Book",
      "Dividend Yield",
    ],
    correctIndex: 1,
    explanation:
      "EV/EBITDA is widely used to compare companies regardless of capital structure differences.",
  },
];

// -------------------- Reusable Components --------------------

// XP Progress Bar Component
const XPProgressBar = ({ xp, xpGoal }) => {
  const progress = Math.min(xp / xpGoal, 1);
  return (
    <div className="w-full bg-gray-300 rounded-full h
