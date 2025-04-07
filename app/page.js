"use client";

import React, { useState } from "react";

// -------------------- Model --------------------
export interface Question {
  id: number;
  prompt: string;
  options: string[]; // For MCQ mode; empty array for flashcards.
  correctIndex?: number; // Undefined for flashcard-only questions.
  explanation: string;
}

export enum QuizMode {
  MCQ = "MCQ",
  Flashcard = "Flashcard",
}

// Sample questions (replace with JSON file loading if needed)
const sampleQuestions: Question[] = [
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
interface XPProgressBarProps {
  xp: number;
  xpGoal: number;
}
const XPProgressBar: React.FC<XPProgressBarProps> = ({ xp, xpGoal }) => {
  const progress = Math.min(xp / xpGoal, 1);
  return (
    <div className="w-full bg-gray-300 rounded-full h-4 mt-4">
      <div
        className="bg-green-500 h-4 rounded-full transition-all duration-500"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
};

// Module Card Component
interface ModuleCardProps {
  title: string;
  subtitle: string;
  image: string;
  color: string;
  onClick: () => void;
}
const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  subtitle,
  image,
  color,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-6 rounded-lg shadow-lg bg-${color}-100 transform hover:scale-105 transition duration-300`}
    >
      <div className="flex items-center">
        <div className="text-4xl">{image}</div>
        <div className="ml-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

// Answer Option Component for MCQ
interface AnswerOptionProps {
  optionText: string;
  isSelected: boolean;
  isCorrect?: boolean;
}
const AnswerOption: React.FC<AnswerOptionProps> = ({
  optionText,
  isSelected,
  isCorrect,
}) => {
  return (
    <div
      className={`p-4 my-2 border rounded cursor-pointer transition-colors ${
        isSelected ? "bg-blue-200" : "bg-white"
      }`}
    >
      {optionText}
      {isSelected && isCorrect !== undefined && (
        <span className="ml-2 font-bold text-lg">
          {isCorrect ? "✔" : "✖"}
        </span>
      )}
    </div>
  );
};

// -------------------- Valuation Module Components --------------------

// MCQ Question View Component
interface MCQQuestionViewProps {
  question: Question;
  selectedOption: number | null;
  onSelectOption: (index: number) => void;
  showExplanation: boolean;
  setShowExplanation: (val: boolean) => void;
}
const MCQQuestionView: React.FC<MCQQuestionViewProps> = ({
  question,
  selectedOption,
  onSelectOption,
  showExplanation,
  setShowExplanation,
}) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">{question.prompt}</h2>
      {question.options.map((option, index) => (
        <div
          key={index}
          onClick={() => onSelectOption(index)}
          className="transition-colors"
        >
          <AnswerOption
            optionText={option}
            isSelected={selectedOption === index}
            isCorrect={
              selectedOption !== null &&
              question.correctIndex === index &&
              selectedOption === index
            }
          />
        </div>
      ))}
      {selectedOption !== null && (
        <>
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="mt-4 text-blue-600 underline"
          >
            {showExplanation ? "Hide Explanation" : "Show Explanation"}
          </button>
          {showExplanation && (
            <p className="mt-2 text-gray-600">
              Explanation: {question.explanation}
            </p>
          )}
        </>
      )}
    </div>
  );
};

// Flashcard View Component
interface FlashcardViewProps {
  question: Question;
  showExplanation: boolean;
  onTap: () => void;
}
const FlashcardView: React.FC<FlashcardViewProps> = ({
  question,
  showExplanation,
  onTap,
}) => {
  return (
    <div
      onClick={onTap}
      className="p-6 border rounded-lg cursor-pointer transition transform hover:scale-105"
    >
      <h2 className="text-xl font-semibold mb-4">{question.prompt}</h2>
      {showExplanation ? (
        <p className="text-gray-600">Answer: {question.explanation}</p>
      ) : (
        <p className="text-blue-600">Tap to reveal the answer</p>
      )}
    </div>
  );
};

// Valuation Module View Component
interface ValuationModuleViewProps {
  xp: number;
  setXP: (xp: number) => void;
  streak: number;
  setStreak: (streak: number) => void;
  questions: Question[];
  onBack: () => void;
}
const ValuationModuleView: React.FC<ValuationModuleViewProps> = ({
  xp,
  setXP,
  streak,
  setStreak,
  questions,
  onBack,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizMode, setQuizMode] = useState<QuizMode>(QuizMode.MCQ);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleMCQAnswer = (optionIndex: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(optionIndex);
    if (currentQuestion.correctIndex === optionIndex) {
      setXP(xp + 100);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
    setTimeout(() => {
      nextQuestion();
    }, 1500);
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("Workout Complete!");
      onBack();
    }
  };

  const handleFlashcardTap = () => {
    setShowExplanation(!showExplanation);
  };

  return (
    <div className="mt-8 p-4 border rounded-lg">
      <button onClick={onBack} className="text-blue-600 mb-4">
        ← Back to Dashboard
      </button>
      <div className="mb-4">
        <span>
          Question {currentIndex + 1} of {questions.length}
        </span>
      </div>
      <div className="mb-4">
        <select
          value={quizMode}
          onChange={(e) => setQuizMode(e.target.value as QuizMode)}
          className="p-2 border rounded"
        >
          {Object.values(QuizMode).map((mode) => (
            <option key={mode} value={mode}>
              {mode}
            </option>
          ))}
        </select>
      </div>
      {quizMode === QuizMode.MCQ ? (
        <MCQQuestionView
          question={currentQuestion}
          selectedOption={selectedOption}
          onSelectOption={handleMCQAnswer}
          showExplanation={showExplanation}
          setShowExplanation={setShowExplanation}
        />
      ) : (
        <FlashcardView
          question={currentQuestion}
          showExplanation={showExplanation}
          onTap={handleFlashcardTap}
        />
      )}
    </div>
  );
};

// -------------------- Home/Dashboard View --------------------
const HomeView: React.FC = () => {
  const [xp, setXP] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">Welcome back, Will!</h1>
      <div className="mt-2 text-gray-600">
        Streak: {streak} | XP: {xp}
      </div>
      <XPProgressBar xp={xp} xpGoal={1000} />
      <div className="mt-8">
        <ModuleCard
          title="Valuation"
          subtitle="Master your DCF skills"
          image="📈"
          color="blue"
          onClick={() => setSelectedModule("Valuation")}
        />
      </div>
      {selectedModule && (
        <ValuationModuleView
          xp={xp}
          setXP={setXP}
          streak={streak}
          setStreak={setStreak}
          questions={sampleQuestions}
          onBack={() => setSelectedModule(null)}
        />
      )}
    </div>
  );
};

// -------------------- Main Page --------------------
export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HomeView />
    </div>
  );
}
