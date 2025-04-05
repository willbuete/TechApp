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

// ---------- Modules Data ---------- //
const modulesData = [
  { id: 1, title: "Valuation Drill", icon: <IconValuation />, estimatedTime: "2 mins", color: "bg-blue-100" },
  { id: 2, title: "Accounting Review", icon: <IconAccounting />, estimatedTime: "3 mins", color: "bg-green-100" },
  { id: 3, title: "Markets Challenge", icon: <IconDailyWorkout />, estimatedTime: "2 mins", color: "bg-orange-100" }
];

// ---------- Sample Quiz Data ---------- //
const sampleQuiz = {
  question: "What is the formula for Enterprise Value?",
  choices: [
    "Market Cap + Total Debt - Cash",
    "Market Cap - Total Debt + Cash",
    "Total Debt - Market Cap + Cash",
    "Market Cap + Cash - Total Debt"
  ],
  explanation: "Enterprise Value equals Market Capitalization plus Total Debt minus Cash and cash equivalents.",
  answer: 0
};

// ---------- Home Screen Component ---------- //
function HomeScreen({ onSelectModule }) {
  const progress = 40; // sample progress percentage

  return (
    <div className="p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">Today&apos;s Workout</h1>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <button className="mt-3 text-sm text-blue-600 underline">Customize Workout</button>
      </header>
      <div className="space-y-4">
        {modulesData.map((mod) => (
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

// ---------- Quiz Screen Component ---------- //
function QuizScreen({ module, onBack }) {
  const [quiz, setQuiz] = useState([sampleQuiz]); 
  const [qIndex, setQIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQ = quiz[qIndex];

  const handleChoice = (index) => {
    setSelectedChoice(index);
    setShowResult(true);
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setShowResult(false);
      setSelectedChoice(null);
      setQIndex((prev) => (prev + 1 < quiz.length ? prev + 1 : -1));
    }, 1200);
  };

  const toggleExplanation = () => setShowExplanation((prev) => !prev);

  return (
    <div className="p-6">
      <button onClick={onBack} className="text-blue-600 text-sm underline mb-4">← Back to Home</button>
      <div className="mb-4">
        <p className="text-sm text-gray-500">Question {qIndex + 1} of {quiz.length}</p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(qIndex + 1) / quiz.length * 100}%` }}></div>
        </div>
      </div>
      {qIndex !== -1 ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl text-gray-800 mb-4">{currentQ.question}</h2>
          <div className="space-y-3">
            {currentQ.choices.map((choice, i) => {
              let btnStyle = "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50";
              if (showResult) {
                if (i === currentQ.answer) btnStyle = "bg-green-100 border-green-400 text-green-800";
                else if (selectedChoice === i) btnStyle = "bg-red-100 border-red-400 text-red-800";
              } else if (selectedChoice === i) {
                btnStyle = "bg-blue-50 border-blue-300 text-blue-800";
              }
              return (
                <button key={i} onClick={() => handleChoice(i)} className={`w-full p-3 rounded-lg transition duration-200 ${btnStyle}`}>
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
              {selectedChoice === currentQ.answer ? (
                <p className="text-green-600">Correct!</p>
              ) : (
                <p className="text-red-600">Incorrect</p>
              )}
              <button onClick={toggleExplanation} className="mt-2 text-sm text-blue-600 underline">
                {showExplanation ? "Hide Explanation" : "Show Explanation"}
              </button>
              {showExplanation && <p className="mt-2 text-gray-600">{currentQ.explanation}</p>}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="text-5xl text-gray-800">🎉</div>
          <h2 className="text-2xl text-gray-700 font-medium">Workout Complete!</h2>
          <p className="text-lg text-gray-600">You got 1 out of 1 correct</p>
          <button onClick={onBack} className="bg-gray-800 text-white px-6 py-2 rounded-full shadow">
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}

// ---------- Performance Tracker Component ---------- //
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

// ---------- News Screen Component ---------- //
function NewsScreen() {
  const [headlines, setHeadlines] = useState([]);
  useEffect(() => {
    // In production, fetch live news headlines from an API.
    setHeadlines([
      "Tech stocks soar amid market rally",
      "Federal Reserve hints at interest rate changes",
      "Oil prices spike as geopolitical tensions rise",
      "Major merger shakes up the financial sector"
    ]);
  }, []);
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Finance News Today</h2>
      {headlines.length === 0 ? (
        <p className="text-gray-600">Fetching news headlines...</p>
      ) : (
        <ul className="space-y-2">
          {headlines.map((headline, i) => (
            <li key={i} className="text-lg text-gray-700 border-b border-gray-200 pb-2">
              {headline}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ---------- More Screen Component (Internship Tracker Placeholder) ---------- //
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

// ---------- Navigation Item Component ---------- //
function NavItem({ icon, label, active, onClick }) {
  return (
    <div onClick={onClick} className="flex flex-col items-center cursor-pointer">
      <span className={`h-7 w-7 ${active ? "text-blue-600" : "text-gray-500"}`}>{icon}</span>
      <span className={`text-sm ${active ? "text-blue-600" : "text-gray-500"}`}>{label}</span>
    </div>
  );
}

// ---------- Main App Component ---------- //
export default function FinancePrepApp() {
  // Active Tab: "Home", "Performance", "News", "Notifications", "More"
  const [activeTab, setActiveTab] = useState("Home");
  const [selectedModule, setSelectedModule] = useState(null);
  const [screen, setScreen] = useState("home"); // "home" or "quiz"
  const [performanceData, setPerformanceData] = useState({});

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="relative w-full max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden flex flex-col">
        {/* Header */}
        <header className="flex items-center p-6 border-b border-gray-200">
          <div
            className="w-14 h-14 flex items-center justify-center text-white rounded-full"
            style={{
              backgroundColor: '#2D2E82',
              clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v2H7v4h2v2h6v-2h2v-4h-2v-2c0-1.657-1.343-3-3-3z" />
            </svg>
          </div>
          <div className="ml-4">
            <h1 className="text-2xl text-gray-800">TechnicalPrep</h1>
            <p className="text-sm text-gray-500">Daily Streak • XP</p>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "Home" && screen === "home" && !selectedModule && (
            <HomeScreen onSelectModule={(mod) => { setSelectedModule(mod); setScreen("quiz"); }} />
          )}
          {activeTab === "Home" && screen === "quiz" && selectedModule && (
            <QuizScreen module={selectedModule} onBack={() => { setSelectedModule(null); setScreen("home"); }} />
          )}
          {activeTab === "Performance" && <PerformanceTracker performanceData={performanceData} />}
          {activeTab === "News" && <NewsScreen />}
          {activeTab === "Notifications" && (
            <div className="p-6 text-gray-600">Notifications placeholder</div>
          )}
          {activeTab === "More" && <MoreScreen />}
        </div>

        {/* Bottom Navigation */}
        <nav className="bg-white border-t border-gray-200 flex justify-around py-4">
          <NavItem icon={<IconDailyWorkout />} label="Home" active={activeTab==="Home"} onClick={()=> { setActiveTab("Home"); setScreen("home"); }} />
          <NavItem icon={<IconPerformance />} label="Performance" active={activeTab==="Performance"} onClick={()=> setActiveTab("Performance")} />
          <NavItem icon={<IconDCF />} label="News" active={activeTab==="News"} onClick={()=> setActiveTab("News")} />
          <NavItem icon={<IconNotifications />} label="Notifications" active={activeTab==="Notifications"} onClick={()=> setActiveTab("Notifications")} />
          <NavItem icon={<IconMore />} label="More" active={activeTab==="More"} onClick={()=> setActiveTab("More")} />
        </nav>
      </div>
    </div>
  );
}
