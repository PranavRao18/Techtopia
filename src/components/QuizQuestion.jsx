import React from 'react';

const QuizQuestion = ({ question, selectedAnswer, onAnswer }) => {
  return (
    <div className="quiz-question text-black">
      <h3>{question}</h3>
    </div>
  );
};

export default QuizQuestion;
