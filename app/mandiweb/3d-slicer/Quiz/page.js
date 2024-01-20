"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Image1 from "@/public/mandiweb/image2-2.png";

const quizQuestions = [
  {
    question:
      "1. Which menu in 3D Slicer allows users to customize the appearance and behavior of the application, including the display of modules in the toolbar?",
    options: [
      "  A. File",
      "  B. Edit",
      "  C. View",
      "  D. Settings",
    ],
    correctAnswer: "B. Edit",
  },
  {
    question:
      "2. Where can users find options for showing/hiding toolbars and switching view layouts in 3D Slicer?",
    options: [
      "  A. Edit Menu",
      "  B. View Menu",
      "  C. File Menu",
      "  D. Module Selection toolbar",
    ],
    correctAnswer: "B. View Menu",
  },
  {
    question:
      "3. Which widely adopted standard, used in medical imaging, not only facilitates the sharing of medical images but also serves as a basis for creating 3D-printable models from medical scan data, allowing for accurate replicas of anatomical structures?",
    options: [
      "  A. RIS (Radiology Information System)",
      "  B. PACS (Picture Archiving and Communication System)",
      "  C. DICOM (Digital Imaging and Communications in Medicine)",
      "  D. EMR (Electronic Medical Record)",
    ],
    correctAnswer: "C. DICOM (Digital Imaging and Communications in Medicine)",
  },
  {
    question:
      "4. How can users customize views, including showing/hiding orientation markers and rulers in 3D Slicer?",

    options: [
      "  A. Click on the push pin in the top left corner",
      "  B. Use the magnify glass icon",
      "  C. Click on the Extension Manager",
      "  D. Navigate through the Module Selection toolbar",
    ],
    correctAnswer: "A. Click on the push pin in the top left corner",
  },
  {
    question:
    "5. This current view in the 3D slicer is called “four up”. What is the empty window on the upper right intended for?", 
  
    options: [
      "A. It is where the 3D image will be shown once activated.",
      "B. The space that will enable multi-user collaboration.",
      "C. Nothing.",
      "D. Provides a workspace for annotations.",
    ],
    image: "image2-2.png",
    correctAnswer: "A. It is where the 3D image will be shown once activated."
  },
  {
    question: (
      <div className="mb-2"
        dangerouslySetInnerHTML={{
          __html: `6. Modules in 3D slicer allow us to perform actions that affect the DICOM files in various ways. From the activity you’ve performed earlier, what are the three (3) modules you have utilized?<br/>
          i.) Crop Volume <br/> ii.) Volume Rendering <br/>  iii.) segment editor <br/>  iv) Volumes <br/>  v.)Threshold `,
        }}
      />
    ),
    options: [ 
      "  A. i, iii, iv",
      "  B. i, ii, iii",
      "  C. ii, iv, v",
      "  D. i, ii, iv",
    ],
    correctAnswer: "A. i, iii, iv",
  },
  
  {
    question:
      `7. In the Data module's Subject hierarchy tab, what does clicking the "eye" icon do?`,
    options: ["  A. Adjust transparency", "  B. Show/hide an item in all views", "  C. Scroll through slices", "  D. Install extensions"],
    correctAnswer: "B. Show/hide an item in all views",
  },
  {
    question: '8. What is the primary objective of threshold-based segmentation in 3D Slicer?',
    options: [
      "  A. Adjust transparency",
      "  B. Customize appearance and behavior",
      "  C. Distinguish and outline specific structures within medical imaging data",
      "  D. Load DICOM files",
    ],
    correctAnswer: "C. Distinguish and outline specific structures within medical imaging data",
  },
  {
    question: '9. In the "LPS" coordinate system, what does "Posterior" refer to?',
    options: [
      "A. The left side of the patient",
      "B. The upper part of the patient",
      "C. The front side of the patient",
      "D. The back side of the patient",
    ],
    correctAnswer: "D. The back side of the patient"
  },
  {
    question: '10. Why is the integration of the scale factor and virtual coordinate system essential in 3D Slicer?',
    options: [
      "A. To change the appearance of the toolbar",
      "B. To customize the font size",
      "C. For precise spatial analysis and visualization",
      "D. To show/hide toolbars",
    ],
    correctAnswer: "C. For precise spatial analysis and visualization"
  }
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
    return userAnswers.every((answer) => answer !== "");
  };

  const score = calculateScore();
  const wrong = checkWrong();

  return (
    <div className="min-h-screen items-center p-6 ">
      <div className="quiz-container" style={quizContainerStyle}>
        <h1 className="text-primary py-4 text-center text-lg font-bold">
          3D Slicer Quiz
        </h1>
        {!showResults ? (
          <div>
            <div className="question" items-center style={questionStyle}>
              <p>{quizQuestions[currentQuestion].question}</p>
              {quizQuestions[currentQuestion].image && (
                <div className="flex justify-center items-center">
                  <Image src={Image1} alt="" width={550} height={550} />
                </div>
              )}
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
              <div className="button-container space-y-2 p-2  font-bold text-primary">
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
          <div className="font-semibold">
            <p>
              Your Score: {score} out of {quizQuestions.length} <br />
              {wrong.length > 0 && `You got a wrong answer on number ${wrong}`}
            </p>
            {score === quizQuestions.length ? (
              <Link href="/mandiweb/mesh-mixer/frame">
                {" "}
                <p className="text-green-900 font-bold">
                  Perfect! Now, Click here to proceed{" "}
                  <span className="underline font-bold">Meshmixer</span>
                </p>
              </Link>
            ) : (
              <div className="text-red font-semibold">
                <p className="text-red-600 text-center pt-4 pb-2">
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
                <Link href="/mandiweb/3d-slicer">
                  <button>Retake the Lesson</button>
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
