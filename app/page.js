'use client';
import { useEffect, useState, useMemo } from 'react';

// ---------- Professional SVG Icon Components ---------- //
function IconDailyWorkout() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
function IconAccounting() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3.314 0-6 1.79-6 4s2.686 4 6 4 6-1.79 6-4-2.686-4-6-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m0 14v1" />
    </svg>
  );
}
function IconValuation() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17l3-3 4 4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11l3-3" />
    </svg>
  );
}
function IconDCF() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h2m16 0h2M12 2v2m0 16v2" />
    </svg>
  );
}
function IconMA() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4l3 6-3 6-3-6 3-6z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12" />
    </svg>
  );
}
function IconLBO() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}
function IconBrainTeaser() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 2v2H7a2 2 0 00-2 2v2a2 2 0 002 2h2v2H7a2 2 0 00-2 2v2a2 2 0 002 2h2v2" />
    </svg>
  );
}
function IconPerformance() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6m-3-9a4 4 0 110-8 4 4 0 010 8z" />
    </svg>
  );
}
function IconNotifications() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1" />
    </svg>
  );
}
function IconMore() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
      <path d="M6 10a2 2 0 114 0 2 2 0 01-4 0zM10 4a2 2 0 100 4 2 2 0 000-4zm0 12a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  );
}

// ---------- HomeScreen Component ---------- //
function HomeScreen({ onSelectModule }) {
  return (
    <div className="p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">Today&apos;s Workout</h1>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "40%" }}></div>
        </div>
        <button className="mt-3 text-sm text-blue-600 underline">Customize Workout</button>
      </header>
      <div className="space-y-4">
        {[
          { id: 1, title: "Valuation Drill", icon: <IconValuation />, estimatedTime: "2 mins", color: "bg-blue-100" },
          { id: 2, title: "Accounting Review", icon: <IconAccounting />, estimatedTime: "3 mins", color: "bg-green-100" },
          { id: 3, title: "Markets Challenge", icon: <IconDailyWorkout />, estimatedTime: "2 mins", color: "bg-orange-100" }
        ].map((mod) => (
          <div
            key={mod.id}
            onClick={() => onSelectModule(mod)}
            className={`p-4 ${mod.color} rounded-lg shadow cursor-pointer transition transform hover:scale-105`}
          >
            <div className="flex items-center">
              <div className="p-3 bg-white rounded-full mr-4">{mod.icon}</div>
              <div>
                <h2 className="text-xl text-gray-700 font-medium">{mod.title}</h2>
                <p className="text-sm text-gray-500">{mod.estimatedTime}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- QuizScreen Component ---------- //
function QuizScreen({ currentQuiz, qIndex, handleChoice, handleSubmit, selectedChoice, showResult, showExplanation, setShowExplanation }) {
  return (
    <div className="p-6 flex-1">
      <button onClick={() => {}} className="text-blue-600 text-sm underline mb-4">&larr; Back to Home</button>
      <div className="mb-4">
        <p className="text-sm text-gray-500">Question {qIndex + 1} of {currentQuiz.length}</p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${((qIndex + 1) / currentQuiz.length) * 100}%` }}></div>
        </div>
      </div>
      {qIndex !== -1 ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl text-gray-800 mb-4">{currentQuiz[qIndex].question}</h2>
          <div className="space-y-3">
            {currentQuiz[qIndex].choices.map((choice, i) => {
              let btnStyle = "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50";
              if (showResult) {
                if (i === currentQuiz[qIndex].answer) btnStyle = "bg-green-100 border-green-400 text-green-800";
                else if (selectedChoice === i) btnStyle = "bg-red-100 border-red-400 text-red-800";
              } else if (selectedChoice === i) {
                btnStyle = "bg-blue-50 border-blue-300 text-blue-800";
              }
              return (
                <button
                  key={i}
                  onClick={() => handleChoice(i)}
                  className={`w-full p-3 rounded-lg transition duration-200 ${btnStyle}`}
                >
                  {choice}
                </button>
              );
            })}
          </div>
          <button onClick={handleSubmit} className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg transition duration-200 hover:bg-blue-700">
            Submit
          </button>
          {showResult && (
            <div className="mt-4 text-gray-800">
              {selectedChoice === currentQuiz[qIndex].answer ? (
                <p className="text-green-600">Correct!</p>
              ) : (
                <p className="text-red-600">Incorrect</p>
              )}
              <button onClick={() => setShowExplanation((prev) => !prev)} className="mt-2 text-sm text-blue-600 underline">
                {showExplanation ? "Hide Explanation" : "Show Explanation"}
              </button>
              {showExplanation && <p className="mt-2 text-gray-600">{currentQuiz[qIndex].explanation}</p>}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center space-y-4 h-full">
          <div className="text-5xl text-gray-800">🎉</div>
          <h2 className="text-2xl text-gray-700 font-medium">Workout Complete!</h2>
          <p className="text-lg text-gray-600">You completed the quiz!</p>
          <button onClick={() => {}} className="bg-gray-800 text-white px-6 py-2 rounded-full shadow">
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}

// ---------- PerformanceTracker Component ---------- //
function PerformanceTracker({ performanceData }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-2 text-gray-800">Performance Tracker</h2>
      {Object.keys(performanceData).length === 0 ? (
        <p className="text-gray-600">No performance data yet.</p>
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Subject</th>
              <th className="py-2">Quizzes</th>
              <th className="py-2">Total Qs</th>
              <th className="py-2">Correct</th>
              <th className="py-2">Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(performanceData).map((subject) => {
              const data = performanceData[subject];
              const accuracy = ((data.totalCorrect / data.totalQuestions) * 100).toFixed(1);
              return (
                <tr key={subject} className="border-b border-gray-100">
                  <td className="py-2 text-gray-700">{subject}</td>
                  <td className="py-2 text-gray-700">{data.quizzes}</td>
                  <td className="py-2 text-gray-700">{data.totalQuestions}</td>
                  <td className="py-2 text-gray-700">{data.totalCorrect}</td>
                  <td className="py-2 text-gray-700">{accuracy}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

// ---------- NewsScreen Component (Finance News + Subject Quiz) ---------- //
function NewsScreen({ selectedModule }) {
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&q=finance&apiKey=${apiKey}`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        const titles = data.articles.map((article) => article.title);
        setHeadlines(titles);
      } catch (err) {
        console.error("Failed to fetch news:", err);
        setError("Failed to fetch finance news.");
      }
    };
    fetchNews();
    const interval = setInterval(fetchNews, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const subjectQuestions = selectedModule
    ? selectedModule.title.includes("Valuation")
      ? questionsData["Valuation"]?.Basic || []
      : selectedModule.title.includes("Accounting")
      ? questionsData["Accounting"]?.Basic || []
      : selectedModule.title.includes("Markets") || selectedModule.title.includes("Daily Workout")
      ? getAggregatedDailyWorkout()
      : []
    : [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Finance News Today</h2>
      {error ? (
        <p className="text-gray-600">{error}</p>
      ) : headlines.length === 0 ? (
        <p className="text-gray-600">Fetching finance news headlines...</p>
      ) : (
        <ul className="space-y-2">
          {headlines.map((headline, i) => (
            <li key={i} className="text-lg text-gray-700 border-b border-gray-200 pb-2">
              {headline}
            </li>
          ))}
        </ul>
      )}
      {selectedModule && subjectQuestions.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Quiz: {selectedModule.title}</h3>
          <ul className="mt-2 space-y-2">
            {subjectQuestions.map((q, index) => (
              <li key={index} className="p-3 bg-gray-50 rounded shadow">
                <p className="text-gray-800 font-medium">{q.question}</p>
                <ul className="mt-1 space-y-1">
                  {q.choices.map((choice, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">
                      {choice}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ---------- MoreScreen Component (Internship Tracker Placeholder) ---------- //
function MoreScreen() {
  return (
    <div className="p-6 text-gray-600 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">More</h2>
      <div>
        <h3 className="text-xl font-medium mb-2 text-gray-700">Internship Tracker</h3>
        <p className="text-lg text-gray-700">[Internship tracker content placeholder]</p>
      </div>
    </div>
  );
}

// ---------- NavItem Component ---------- //
function NavItem({ icon, label, active, onClick }) {
  return (
    <div onClick={onClick} className="flex flex-col items-center cursor-pointer">
      <span className={`h-7 w-7 ${active ? "text-blue-600" : "text-gray-500"}`}>{icon}</span>
      <span className={`text-sm ${active ? "text-blue-600" : "text-gray-500"}`}>{label}</span>
    </div>
  );
}

// ---------- Full Questions Data (Consolidated) ---------- //
const questionsData = {
  Accounting: {
    Basic: [
      { question: "Which of the following correctly lists the three major financial statements?", choices: ["Income Statement, Cash Flow Statement, Equity Statement", "Balance Sheet, Cash Flow Statement, Statement of Capital", "Income Statement, Balance Sheet, Cash Flow Statement", "Income Statement, Profit &amp; Loss Statement, Balance Sheet"], answer: 2 },
      // ... rest of the Accounting Basic questions
    ],
    Advanced: [
      { question: "GAAP accounting differs from tax accounting primarily because:", choices: ["GAAP is cash-based and tax accounting is accrual-based.", "GAAP uses accelerated depreciation methods, while tax accounting uses straight-line.", "GAAP is accrual-based and tax accounting is cash-based.", "Tax accounting more accurately tracks long-term liabilities."], answer: 2 },
      // ... rest of the Accounting Advanced questions
    ]
  },
  Valuation: {
    Basic: [
      { question: "Why do analysts consider both Enterprise Value and Equity Value?", choices: ["Equity Value shows market value, while Enterprise Value shows book value.", "Enterprise Value includes debt, whereas Equity Value does not.", "Equity Value is for creditors, Enterprise Value is for shareholders.", "Enterprise Value always equals Equity Value."], answer: 1 },
      // ... rest of the Valuation Basic questions
    ],
    Advanced: [
      { question: "When valuing banks and financial institutions, analysts typically use:", choices: ["EV/EBITDA multiples", "Dividend Discount Models (DDM) and P/E multiples", "Price-to-sales ratios", "Standard DCF models"], answer: 1 },
      // ... rest of the Valuation Advanced questions
    ]
  },
  "Discounted Cash Flow": {
    Basic: [
      { question: "A Discounted Cash Flow (DCF) valuation primarily relies on:", choices: ["Historical earnings", "Present Value of future cash flows and Terminal Value", "Book value of equity", "Dividend payments only"], answer: 1 },
      // ... rest of the DCF Basic questions
    ],
    Advanced: [
      { question: "Why is the mid-year convention used in a DCF?", choices: ["To simplify calculations", "Because cash flows arrive evenly throughout the year", "To inflate valuations artificially", "To ignore discounting completely"], answer: 1 },
      // ... rest of the DCF Advanced questions
    ]
  },
  "M&A": {
    Basic: [
      { question: "A merger model primarily helps determine:", choices: ["The tax benefits of a merger", "If the buyer’s EPS increases or decreases post-acquisition", "The impact on debt covenants", "Management compensation"], answer: 1 },
      // ... rest of the M&A Basic questions
    ],
    Advanced: [
      { question: "In an M&amp;A deal using purchase accounting:", choices: ["Shareholders&apos; equity numbers combine directly", "The seller&apos;s equity is wiped out and Goodwill is recorded", "Only tangible assets combine", "Intangible assets are ignored"], answer: 1 },
      // ... rest of the M&A Advanced questions
    ]
  },
  "LBO": {
    Basic: [
      { question: "What is the first step in an LBO model?", choices: ["Calculate interest payments", "Adjust balance sheet items", "Make assumptions about Purchase Price, Debt/Equity, and Interest Rate", "Determine the exit strategy"], answer: 2 },
      // ... rest of the LBO Basic questions
    ],
    Advanced: [
      { question: "In terms of seniority in a bankruptcy scenario, which debt holder typically gets paid first?", choices: ["Senior unsecured", "Senior secured", "Senior subordinated", "Equity investors"], answer: 1 },
      // ... rest of the LBO Advanced questions
    ]
  },
  "Brain Teaser": [
    { question: "A car drives 60 miles at an average speed of 30 miles per hour. To travel the same 60 miles in the same amount of time at an average speed of 60 mph, how fast must the car drive?", choices: ["90 mph", "120 mph", "It's impossible", "60 mph"], answer: 2 },
    // ... rest of the Brain Teaser questions
  ]
};

// ---------- Daily Workout Aggregation ---------- //
function getAggregatedDailyWorkout() {
  let agg = [];
  const dailyWorkoutSubjects = ["Accounting", "Valuation", "Discounted Cash Flow", "M&A", "LBO"];
  dailyWorkoutSubjects.forEach((sub) => {
    const subData = questionsData[sub];
    if (subData && subData.Basic && subData.Basic.length >= 4) {
      const shuffled = [...subData.Basic].sort(() => Math.random() - 0.5);
      agg = agg.concat(shuffled.slice(0, 4));
    }
  });
  return agg.sort(() => Math.random() - 0.5);
}

// ---------- Main App Component ---------- //
export default function FinancePrepApp() {
  const [activeTab, setActiveTab] = useState("Home");
  const [selectedModule, setSelectedModule] = useState(null);
  const [screen, setScreen] = useState("home"); // "home" or "quiz"
  const [performanceData, setPerformanceData] = useState({});
  const [qIndex, setQIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // Updated subjectQuestions logic based on module title keywords.
  const subjectQuestions = useMemo(() => {
    if (selectedModule) {
      if (selectedModule.title.includes("Markets") || selectedModule.title.includes("Daily Workout")) {
        return getAggregatedDailyWorkout();
      } else if (selectedModule.title.includes("Valuation")) {
        return questionsData["Valuation"];
      } else if (selectedModule.title.includes("Accounting")) {
        return questionsData["Accounting"];
      }
    }
    return null;
  }, [selectedModule]);

  const hasCategories = subjectQuestions && typeof subjectQuestions === "object" && !Array.isArray(subjectQuestions);
  const currentQuiz = useMemo(() => {
    if (hasCategories) {
      return subjectQuestions["Basic"] || [];
    } else if (subjectQuestions) {
      return subjectQuestions;
    }
    return [];
  }, [hasCategories, subjectQuestions]);

  const handleChoice = (index) => {
    setSelectedChoice(index);
    setShowResult(true);
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setShowResult(false);
      setSelectedChoice(null);
      setShowExplanation(false);
      setQIndex((prev) => (prev + 1 < currentQuiz.length ? prev + 1 : -1));
    }, 1200);
  };

  return (
    <div className="h-screen bg-gray-100 font-sans">
      <div className="relative w-full max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden flex flex-col h-full">
        {/* Header */}
        <header className="flex items-center p-6 border-b border-gray-200">
          <div
            className="w-14 h-14 flex items-center justify-center text-white rounded-full"
            style={{
              backgroundColor: "#2D2E82",
              clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v2H7v4h2v2h6v-2h2v-4h-2v-2c0-1.657-1.343-3-3-3z" />
            </svg>
          </div>
          <div className="ml-4">
            <h1 className="text-2xl text-gray-800">TechnicalPrep</h1>
            <p className="text-sm text-gray-500">Daily Streak &amp; XP</p>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "Home" && screen === "home" && !selectedModule && (
            <HomeScreen onSelectModule={(mod) => { setSelectedModule(mod); setScreen("quiz"); setQIndex(0); }} />
          )}
          {activeTab === "Home" && screen === "quiz" && selectedModule && (
            <>
              {currentQuiz.length > 0 ? (
                <div className="p-6">
                  <button onClick={() => { setSelectedModule(null); setScreen("home"); }} className="text-blue-600 text-sm underline mb-4">
                    &larr; Back to Home
                  </button>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">Question {qIndex + 1} of {currentQuiz.length}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${((qIndex + 1) / currentQuiz.length) * 100}%` }}></div>
                    </div>
                  </div>
                  <QuizScreen
                    currentQuiz={currentQuiz}
                    qIndex={qIndex}
                    handleChoice={handleChoice}
                    handleSubmit={handleSubmit}
                    selectedChoice={selectedChoice}
                    showResult={showResult}
                    showExplanation={showExplanation}
                    setShowExplanation={setShowExplanation}
                  />
                </div>
              ) : (
                <div className="p-6 flex flex-col items-center justify-center h-full">
                  <p className="text-gray-700">No questions available for this drill.</p>
                  <button onClick={() => { setSelectedModule(null); setScreen("home"); }} className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-full shadow">
                    Back to Home
                  </button>
                </div>
              )}
            </>
          )}
          {activeTab === "Performance" && <PerformanceTracker performanceData={performanceData} />}
          {activeTab === "News" && <NewsScreen selectedModule={selectedModule} />}
          {activeTab === "Notifications" && (
            <div className="p-6 text-gray-600">Notifications placeholder</div>
          )}
          {activeTab === "More" && <MoreScreen />}
        </div>

        {/* Bottom Navigation */}
        <nav className="bg-white border-t border-gray-200 flex justify-around py-4">
          <NavItem icon={<IconDailyWorkout />} label="Home" active={activeTab === "Home"} onClick={() => { setActiveTab("Home"); setScreen("home"); }} />
          <NavItem icon={<IconPerformance />} label="Performance" active={activeTab === "Performance"} onClick={() => setActiveTab("Performance")} />
          <NavItem icon={<IconDCF />} label="News" active={activeTab === "News"} onClick={() => setActiveTab("News")} />
          <NavItem icon={<IconNotifications />} label="Notifications" active={activeTab === "Notifications"} onClick={() => setActiveTab("Notifications")} />
          <NavItem icon={<IconMore />} label="More" active={activeTab === "More"} onClick={() => setActiveTab("More")} />
        </nav>
      </div>
    </div>
  );
}
