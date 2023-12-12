// QuizQuestion.js

import React from 'react';

const QuizQuestion = ({ question, options, selectedAnswer, onAnswer, timeLeft }) => {
  return (
    <div className="quiz-question text-black">
      <h3>{question}</h3>
      {/* <div className="options">
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option${index}`}
              name="answerOptions"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onAnswer(option)}
            />
            <label htmlFor={`option${index}`}>{option}</label>
          </div>
        ))}
      </div> */}
      <p>Time Left: {timeLeft}s</p>
    </div>
  );
};

export default QuizQuestion;
