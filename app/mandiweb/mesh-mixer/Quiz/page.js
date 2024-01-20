"use client";
import React, { useState } from "react";
import Link from "next/link";

const quizQuestions = [
  {
    question:
      '1. In Autodesk Meshmixer, what does the "generate face groups" tool primarily assist users in doing when working with 3D models?',
    options: [
      "  A. Creating customized textures for models",
      "  B. Generating a 3D printable mesh",
      "  C. Organizing and separating connected faces on a model",
      "  D. Automatically adding additional geometric details",
    ],
    correctAnswer: "C. Organizing and separating connected faces on a model",
  },
  {
    question:
      "2. In this lesson or study, which specific part of the skull did you isolate from the rest and perform manipulations on?",
    options: [
      "  A. Occipital bone",
      "  B. Mandible (lower jaw)",
      "  C. Sphenoid bone",
      "  D. Maxilla",
    ],
    correctAnswer: "B. Mandible (lower jaw)",
  },
  {
    question:
      "3. In Autodesk Meshmixer, which combination of functions allows you to achieve symmetrical 3D manipulation of a model, where you can create a perfect mirror image of one side by utilizing the other, and also perform precise plane cuts to reshape the model?",
    options: [
      "  A. Sculpting and Extrusion",
      "  B. Flatten and Flatten Boundary",
      "  C. Plane Cut and Bend",
      "  D. Mirror and Plane Cut",
    ],
    correctAnswer: "D. Mirror and Plane Cut",
  },
  {
    question:
    "4. What function is applied to convert the mandible model into a solid form suitable for 3D printing?",
    options: [
      "A. Apply",
      "B. Edit",
      "C. Mirror",
      "D. Make Solid",
    ],
    correctAnswer: "D. Make Solid"
  },
  {
    question:
    `5. What should the user do after applying the "Make Solid" function to the mandible model?`,
    options:
    [
      'A. Click on "Accept"',
      'B. Click on "Mirror"',
      'C. Click on "Edit"',
      'D. Click on "Make Solid" again',
    ],
    correctAnswer: 'A. Click on "Accept"'
  },
];

export default function QuizApp() {
  const [userAnswers, setUserAnswers] = useState(
    Array(quizQuestions.length).fill("")
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (event, questionIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = event.target.value.trim();
    setUserAnswers(updatedAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer.trim() === quizQuestions[index].correctAnswer.trim()) {
        score++;
      }
    });
    return score;
  };

  const checkWrong = () => {
    let wrong = [];
    userAnswers.forEach((answer, index) => {
      if (answer.trim() !== quizQuestions[index].correctAnswer.trim()) {
        wrong.push(index + 1);
      }
    });
    return wrong;
  };

  const retakeQuiz = () => {
    setUserAnswers(Array(quizQuestions.length).fill(""));
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const isCurrentQuestionAnswered = () => {
    return userAnswers[currentQuestion] !== "";
  };

  const areAllQuestionsAnswered = () => {
    return userAnswers.every(answer => answer !== "");
  };

  const score = calculateScore();
  const wrong = checkWrong();

  return (
    <div className="min-h-screen items-center  p-4">
      <div className="quiz-container" style={quizContainerStyle}>
        <h1 className="text-primary py-4 text-center text-lg font-bold">
          Meshmixer Quiz
        </h1>
        {!showResults ? (
          <div>
            <div className="question" style={questionStyle}>
              <h3>{quizQuestions[currentQuestion].question}</h3>
              <ul className="pl-4">
                {quizQuestions[currentQuestion].options.map(
                  (option, optionIndex) => (
                    <li key={optionIndex}>
                      <label>
                        <input
                          type="radio"
                          name={`question-${currentQuestion}`}
                          value={option}
                          onChange={(e) =>
                            handleAnswerChange(e, currentQuestion)
                          }
                          checked={
                            userAnswers[currentQuestion] === option.trim()
                          }
                        />
                        {option}
                      </label>
                    </li>
                  )
                )}
              </ul>
              <div className="button-container space-y-2 p-2 font-bold text-primary">
                {currentQuestion > 0 && (
                  <button
                    onClick={goToPreviousQuestion}
                    style={prevButtonStyle}
                  >
                    Previous
                  </button>
                )}
                {currentQuestion < quizQuestions.length - 1 && (
                  <button
                    onClick={goToNextQuestion}
                    style={nextButtonStyle}
                    disabled={!isCurrentQuestionAnswered()} // Disable if not answered
                  >
                    Next
                  </button>
                )}
                {currentQuestion === quizQuestions.length - 1 && (
                  <button
                    onClick={() => setShowResults(areAllQuestionsAnswered())}
                    style={submitButtonStyle}
                    disabled={!areAllQuestionsAnswered()} // Disable if not all questions are answered
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>
              Your Score: {score} out of {quizQuestions.length} <br />
              {wrong.length > 0 && `You got a wrong answer on number ${wrong}`}
            </p>
            {score === quizQuestions.length ? (
              <Link href="/mandiweb/mesh-mixer/Pre-test">
                <p className="text-green-900 font-bold">
                  You got a perfect score!! <br/> 
                  We are encouraging you to take our <span className="underline font-bold">webite form and survey</span> and get your certificate
                </p>
              </Link>
            ) : (
              <div className="font-semibold pt-4">
                <p className="text-red-600 pt-2 pb-2  text-center">
                  Sorry, you didn&apos;t pass. You can retake the quiz to
                  improve your score.
                </p>
                <button
                  onClick={retakeQuiz}
                  style={retakeButtonStyle}
                  className="text-right"
                >
                  Retake Quiz
                </button>
                <Link href="/mandiweb/mesh-mixer">
                  <button className="text-left">Retake the Lesson</button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const quizContainerStyle = {
  width: "70%",
  margin: "0 auto",
  padding: "20px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  backgroundColor: "#fff",
};

const questionStyle = {
  marginBottom: "20px",
};

const submitButtonStyle = {
  marginTop: "20px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};

const retakeButtonStyle = {
  marginTop: "",
  display: "block",
  float: "right",
};

const prevButtonStyle = {
  marginTop: "20px",
  display: "block",
  float: "left",
};

const nextButtonStyle = {
  marginTop: "20px",
  display: "block",
  float: "right",
};
