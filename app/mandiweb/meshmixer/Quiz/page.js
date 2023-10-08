"use client"
import React, { useState } from "react";
import Link from "next/link";

const quizQuestions = [
    {
      question:
        "1. In Autodesk Meshmixer, what does the \"generate face groups\" tool primarily assist users in doing when working with 3D models?",
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
  ];
  

  export default function QuizApp() {
    const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill(""));
    const [showResults, setShowResults] = useState(false);
  
    const handleAnswerChange = (event, questionIndex) => {
      const updatedAnswers = [...userAnswers];
      updatedAnswers[questionIndex] = event.target.value.trim();
      setUserAnswers(updatedAnswers);
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
  
    const retakeQuiz = () => {
      setUserAnswers(Array(quizQuestions.length).fill(""));
      setShowResults(false);
    };
  
    const score = calculateScore();
  
    return (
      <div className="min-h-screen items-center">

      <div className="quiz-container" style={quizContainerStyle}>
        <h1 className="text-primary py-4 text-center text-lg font-bold">Meshmixer Quiz</h1>
        {!showResults ? (
          <div>
            {quizQuestions.map((question, index) => (
              <div key={index} className="question" style={questionStyle}>
                <h3>{question.question}</h3>
                <ul className="pl-4">
                  {question.options.map((option, optionIndex) => (
                    <li key={optionIndex}>
                      <label>
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={option}
                          onChange={(e) => handleAnswerChange(e, index)}
                          checked={userAnswers[index] === option.trim()}
                          />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {score === quizQuestions.length ? (
              <div>
                <p>Your Score: {score} out of {quizQuestions.length}</p>
                <p>Congratulations! You passed the quiz.</p>
                <Link href="/mandiweb/Fillup">Click here to get your <span className="underline font-bold">certificate</span></Link>
              </div>
            ) : (
              <button onClick={() => setShowResults(true)} style={submitButtonStyle}>Submit</button>
            )}
          </div>
        ) : (
    
          <div>
            <p>Your Score: {score} out of {quizQuestions.length}</p>
            {score === quizQuestions.length ? (
              <Link href="/mandiweb/Fillup"> Click here to get your <span className="underline font-bold"> Certificate</span></Link>
            ) : (
              <div>
                <p>Sorry, you didn't pass. You can retake the quiz to improve your score.</p>
                <button onClick={retakeQuiz} style={retakeButtonStyle}>Retake Quiz</button>
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
    marginTop: "20px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };