// QuizPage.js

import React, { useState, useEffect } from 'react';
import QuizQuestion from '../components/QuizQuestion';
import '../index.css';

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
        "question": "Who was the first human to travel into space?",
        "options": ["Yuri Gagarin", "Alan Shepard", "John Glenn", "Neil Armstrong"],
        "correctAnswer": "Yuri Gagarin"
      },
      {
        "question": "What is the name of the Mars rover that successfully landed in 2021 to search for signs of ancient life?",
        "options": ["Spirit", "Opportunity", "Curiosity", "Perseverance"],
        "correctAnswer": "Perseverance"
      }
  ];

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, currentQuestion]);

  const handleAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(10);
      setSelectedAnswer(null);
    } else {
      alert(`Quiz Completed! Your total score is ${score}/${questions.length}`);
    }
  };

  return (
    <div className="quiz-page flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat">
      <div className="quiz-card bg-white bg-opacity-80 p-8 rounded-md text-center max-w-md">
        <QuizQuestion
          question={questions[currentQuestion].question}
          selectedAnswer={selectedAnswer}
          onAnswer={handleAnswer}
          timeLeft={timeLeft}
        />
        <div className="options-list text-left mt-4">
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} className="text-lg mb-2">
                <label className="inline-flex items-center" style={{ color: 'black' }}>
                  <input
                    type="radio"
                    id={`option${index}`}
                    name="answerOptions"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleAnswer(option)}
                    className="form-radio h-5 w-5 text-black"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <button className="next-button bg-green-500 text-white px-4 py-2 rounded-md mt-4" onClick={handleNextQuestion}>
          Next Question
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
