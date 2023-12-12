// QuizQuestion.js

import React from 'react';

const QuizQuestion = ({ question, options, selectedAnswer, onAnswer, timeLeft }) => {
  return (
    <div className="quiz-question text-black">
      <h3>{question}</h3>
      <p>Time Left: {timeLeft}s</p>
    </div>
  );
};

export default QuizQuestion;
