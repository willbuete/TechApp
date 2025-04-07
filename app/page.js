import SwiftUI
import Combine

// MARK: - Model

struct Question: Identifiable, Codable {
    let id: Int
    let prompt: String
    let options: [String]      // For MCQ mode
    let correctIndex: Int?     // Nil for flashcard-only questions
    let explanation: String
}

// MARK: - Quiz Mode Enum

enum QuizMode: String, CaseIterable {
    case mcq = "MCQ"
    case flashcard = "Flashcard"
}

// MARK: - View Model for Valuation Module

class ValuationViewModel: ObservableObject {
    @Published var questions: [Question] = []
    @Published var currentIndex: Int = 0
    @Published var quizMode: QuizMode = .mcq
    @Published var selectedOption: Int? = nil
    @Published var showExplanation: Bool = false
    @Published var answerSubmitted: Bool = false
    
    private var cancellables = Set<AnyCancellable>()
    
    init() {
        loadQuestions()
    }
    
    func loadQuestions() {
        // Replace this with Bundle.main.url(forResource:) JSON decoding as needed.
        // For now, using inline sample data:
        let sampleQuestions: [Question] = [
            Question(
                id: 1,
                prompt: "Which method best reflects intrinsic value?",
                options: [
                    "Discounted Cash Flow (DCF)",
                    "Comparable Companies",
                    "Precedent Transactions",
                    "Sum-of-the-Parts"
                ],
                correctIndex: 0,
                explanation: "DCF projects free cash flows and discounts them to present value to estimate intrinsic value."
            ),
            Question(
                id: 2,
                prompt: "In a DCF, what does the terminal value represent?",
                options: [
                    "The value of cash flows beyond the projection period",
                    "The current market price",
                    "Total equity value",
                    "Net income of the final year"
                ],
                correctIndex: 0,
                explanation: "Terminal value captures the value of all future cash flows beyond the explicit forecast period."
            ),
            Question(
                id: 3,
                prompt: "Flashcard: Define Free Cash Flow.",
                options: [],
                correctIndex: nil,
                explanation: "Free Cash Flow is the cash a company generates after accounting for cash outflows to support operations and maintain its capital assets."
            ),
            Question(
                id: 4,
                prompt: "Which valuation multiple is most useful for comparing companies within the same industry?",
                options: [
                    "Price-to-Earnings (P/E)",
                    "Enterprise Value/EBITDA",
                    "Price-to-Book",
                    "Dividend Yield"
                ],
                correctIndex: 1,
                explanation: "EV/EBITDA is widely used to compare companies regardless of capital structure differences."
            )
        ]
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
            self.questions = sampleQuestions
        }
    }
    
    func submitAnswer(_ option: Int) {
        guard quizMode == .mcq,
              let correct = questions[currentIndex].correctIndex,
              !answerSubmitted else { return }
        selectedOption = option
        answerSubmitted = true
    }
    
    func nextQuestion() {
        withAnimation {
            currentIndex += 1
            selectedOption = nil
            showExplanation = false
            answerSubmitted = false
        }
    }
    
    func reset() {
        currentIndex = 0
        selectedOption = nil
        showExplanation = false
        answerSubmitted = false
    }
}

// MARK: - User Progress Model

class UserProgress: ObservableObject {
    @Published var xp: Int = 0
    @Published var streak: Int = 0
    
    func addXP(_ points: Int) {
        xp += points
    }
    
    func incrementStreak() {
        streak += 1
    }
    
    func resetStreak() {
        streak = 0
    }
}

// MARK: - Home/Dashboard View

struct HomeView: View {
    @StateObject private var userProgress = UserProgress()
    
    var body: some View {
        NavigationView {
            VStack(spacing: 20) {
                // Welcome and Progress Info
                VStack {
                    Text("Welcome back, Will!")
                        .font(.title)
                        .fontWeight(.semibold)
                    HStack {
                        Text("Streak: \(userProgress.streak)")
                            .font(.subheadline)
                            .foregroundColor(.gray)
                        Spacer()
                        Text("XP: \(userProgress.xp)")
                            .font(.subheadline)
                            .foregroundColor(.gray)
                    }
                    .padding(.horizontal)
                }
                
                // XP Progress Bar
                XPProgressBar(xp: userProgress.xp, xpGoal: 1000)
                    .frame(height: 20)
                    .padding(.horizontal)
                
                // Module Card for Valuation
                NavigationLink(destination: ValuationModuleView(userProgress: userProgress)) {
                    ModuleCardView(
                        title: "Valuation",
                        subtitle: "Master your DCF skills",
                        imageName: "chart.bar.xaxis",
                        color: .blue
                    )
                }
                Spacer()
            }
            .padding()
            .navigationTitle("Dashboard")
        }
    }
}

struct ModuleCardView: View {
    let title: String
    let subtitle: String
    let imageName: String
    let color: Color
    
    @State private var animate = false
    
    var body: some View {
        ZStack {
            RoundedRectangle(cornerRadius: 20)
                .fill(color.opacity(0.2))
                .shadow(radius: 5)
            HStack(spacing: 15) {
                Image(systemName: imageName)
                    .resizable()
                    .scaledToFit()
                    .frame(width: 50, height: 50)
                    .foregroundColor(color)
                VStack(alignment: .leading, spacing: 5) {
                    Text(title)
                        .font(.headline)
                    Text(subtitle)
                        .font(.subheadline)
                        .foregroundColor(.gray)
                }
                Spacer()
            }
            .padding()
        }
        .frame(height: 120)
        .padding(.horizontal)
        .scaleEffect(animate ? 1.05 : 1.0)
        .onAppear {
            withAnimation(.spring(response: 0.6, dampingFraction: 0.5, blendDuration: 0)) {
                animate = true
            }
        }
    }
}

// MARK: - XP Progress Bar

struct XPProgressBar: View {
    var xp: Int
    var xpGoal: Int
    
    var progress: CGFloat {
        min(CGFloat(xp) / CGFloat(xpGoal), 1.0)
    }
    
    var body: some View {
        GeometryReader { geo in
            ZStack(alignment: .leading) {
                RoundedRectangle(cornerRadius: geo.size.height / 2)
                    .fill(Color.gray.opacity(0.3))
                RoundedRectangle(cornerRadius: geo.size.height / 2)
                    .fill(Color.green)
                    .frame(width: geo.size.width * progress)
                    .animation(.linear(duration: 0.5), value: xp)
            }
        }
    }
}

// MARK: - Valuation Module View

struct ValuationModuleView: View {
    @ObservedObject var userProgress: UserProgress
    @StateObject private var viewModel = ValuationViewModel()
    
    var body: some View {
        VStack {
            // Segmented control to switch between modes
            Picker("Quiz Mode", selection: $viewModel.quizMode) {
                ForEach(QuizMode.allCases, id: \.self) { mode in
                    Text(mode.rawValue)
                }
            }
            .pickerStyle(SegmentedPickerStyle())
            .padding()
            
            // Question counter
            Text("Question \(min(viewModel.currentIndex + 1, viewModel.questions.count)) of \(viewModel.questions.count)")
                .font(.subheadline)
                .padding(.top, 5)
            
            // Display current question depending on quiz mode
            if viewModel.currentIndex < viewModel.questions.count {
                if viewModel.quizMode == .mcq {
                    MCQQuestionView(viewModel: viewModel)
                } else {
                    FlashcardView(question: viewModel.questions[viewModel.currentIndex])
                }
            } else {
                // Completion screen
                VStack(spacing: 20) {
                    Text("Workout Complete!")
                        .font(.largeTitle)
                        .fontWeight(.bold)
                    Button(action: {
                        viewModel.reset()
                    }) {
                        Text("Restart Module")
                            .padding()
                            .frame(maxWidth: .infinity)
                            .background(Color.blue)
                            .foregroundColor(.white)
                            .cornerRadius(10)
                    }
                }
                .padding()
            }
            Spacer()
        }
        .padding()
        .navigationTitle("Valuation Module")
        .onChange(of: viewModel.currentIndex) { newIndex in
            // Update user progress when a question is answered
            if newIndex < viewModel.questions.count {
                if viewModel.quizMode == .mcq {
                    if let selected = viewModel.selectedOption,
                       let correct = viewModel.questions[newIndex - 1].correctIndex {
                        if selected == correct {
                            userProgress.addXP(100)
                            userProgress.incrementStreak()
                            generateHapticFeedback(success: true)
                        } else {
                            userProgress.resetStreak()
                            generateHapticFeedback(success: false)
                        }
                    }
                }
            }
        }
    }
    
    func generateHapticFeedback(success: Bool) {
        let generator = UINotificationFeedbackGenerator()
        generator.notificationOccurred(success ? .success : .error)
    }
}

// MARK: - MCQ Question View

struct MCQQuestionView: View {
    @ObservedObject var viewModel: ValuationViewModel
    
    var body: some View {
        let question = viewModel.questions[viewModel.currentIndex]
        VStack(alignment: .leading, spacing: 20) {
            Text(question.prompt)
                .font(.headline)
            ForEach(0..<question.options.count, id: \.self) { index in
                AnswerOptionView(optionText: question.options[index],
                                 isSelected: viewModel.selectedOption == index,
                                 isCorrect: viewModel.answerSubmitted && (index == question.correctIndex))
                    .onTapGesture {
                        if viewModel.selectedOption == nil {
                            viewModel.submitAnswer(index)
                            // Delay before moving on to next question
                            DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) {
                                withAnimation {
                                    viewModel.nextQuestion()
                                }
                            }
                        }
                    }
            }
            if viewModel.answerSubmitted, viewModel.showExplanation || viewModel.selectedOption != nil {
                Text("Explanation: \(question.explanation)")
                    .font(.subheadline)
                    .foregroundColor(.gray)
                    .transition(.opacity)
            }
            if viewModel.answerSubmitted {
                Button(action: {
                    withAnimation {
                        viewModel.showExplanation.toggle()
                    }
                }) {
                    Text(viewModel.showExplanation ? "Hide Explanation" : "Show Explanation")
                        .font(.footnote)
                        .foregroundColor(.blue)
                }
            }
        }
        .padding()
        .background(
            RoundedRectangle(cornerRadius: 15)
                .fill(Color(UIColor.secondarySystemBackground))
                .shadow(radius: 5)
        )
        .transition(.slide)
    }
}

// MARK: - Flashcard View

struct FlashcardView: View {
    let question: Question
    @State private var showAnswer = false
    
    var body: some View {
        VStack(spacing: 20) {
            Text(question.prompt)
                .font(.headline)
                .padding()
            if showAnswer {
                Text(question.explanation)
                    .font(.subheadline)
                    .foregroundColor(.gray)
                    .padding()
                    .transition(.opacity)
            } else {
                Text("Tap to reveal the answer")
                    .font(.footnote)
                    .foregroundColor(.blue)
            }
        }
        .frame(maxWidth: .infinity)
        .padding()
        .background(
            RoundedRectangle(cornerRadius: 15)
                .fill(Color(UIColor.tertiarySystemBackground))
                .shadow(radius: 5)
        )
        .onTapGesture {
            withAnimation {
                showAnswer.toggle()
            }
        }
    }
}

// MARK: - Reusable Answer Option View

struct AnswerOptionView: View {
    let optionText: String
    let isSelected: Bool
    let isCorrect: Bool
    
    var body: some View {
        HStack {
            Text(optionText)
                .foregroundColor(.primary)
                .padding()
            Spacer()
            if isSelected {
                Image(systemName: isCorrect ? "checkmark.circle.fill" : "xmark.circle.fill")
                    .foregroundColor(isCorrect ? .green : .red)
                    .padding(.trailing)
            }
        }
        .background(isSelected ? Color.blue.opacity(0.2) : Color.gray.opacity(0.1))
        .cornerRadius(10)
        .padding(.vertical, 4)
    }
}

// MARK: - Preview

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
    }
}
