import React from 'react';
import { useDarkMode } from '../DarkModeContext';

const QuizQuestion = ({ question, selectedAnswer, onAnswer }) => {
  const { darkMode} = useDarkMode();
  return (
    <div className={`quiz-question ${darkMode ? 'text-white' : 'text-black' } text-xl sm:text-2xl`}>
      <h3>{question}</h3>
    </div>
  );
};

export default QuizQuestion;
