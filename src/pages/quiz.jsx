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
    // ... (same questions as before)
    {
        "question": "What is the largest moon in our solar system?",
        "options": ["Ganymede", "Titan", "Io", "Europa"],
        "correctAnswer": "Ganymede"
      },
      {
        "question": "What is the only natural satellite of Earth?",
        "options": ["Deimos", "Phobos", "Luna", "Triton"],
        "correctAnswer": "Luna"
      },
      {
        "question": "What is the dark, flat plains on the Moon's surface called?",
        "options": ["Craters", "Highlands", "Rilles", "Maria"],
        "correctAnswer": "Maria"
      },
      {
        "question": "Which planet is known as the 'Red Planet'?",
        "options": ["Mars", "Jupiter", "Venus", "Saturn"],
        "correctAnswer": "Mars"
      },
      {
        "question": "What is the largest planet in our solar system?",
        "options": ["Saturn", "Jupiter", "Neptune", "Uranus"],
        "correctAnswer": "Jupiter"
      },
      {
        "question": "Which planet is often referred to as the 'Morning Star' or 'Evening Star'?",
        "options": ["Mercury", "Venus", "Mars", "Jupiter"],
        "correctAnswer": "Venus"
      },
      {
        "question": "What is the closest star to Earth?",
        "options": ["Alpha Centauri", "Sirius", "Proxima Centauri", "Betelgeuse"],
        "correctAnswer": "Proxima Centauri"
      },
      {
        "question": "What is a group of stars forming a recognizable pattern called?",
        "options": ["Constellation", "Galaxy", "Nebula", "Cluster"],
        "correctAnswer": "Constellation"
      },
      {
        "question": "What is the process by which a star exhausts the nuclear fuel in its core and collapses under the force of gravity?",
        "options": ["Supernova", "Black Hole Formation", "Nebula Formation", "Red Giant Stage"],
        "correctAnswer": "Supernova"
      },
      {
        "question": "Who was the first human to travel into space?",
        "options": ["Yuri Gagarin", "Alan Shepard", "John Glenn", "Neil Armstrong"],
        "correctAnswer": "Yuri Gagarin"
      },
      {
        "question": "What is the name of the Mars rover that successfully landed in 2021 to search for signs of ancient life?",
        "options": ["Spirit", "Opportunity", "Curiosity", "Perseverance"],
        "correctAnswer": "Perseverance"
      },
      {
        "question": "Which spacecraft carried the first humans to the Moon in 1969?",
        "options": ["Apollo 11", "Gemini 4", "Sputnik 1", "Vostok 1"],
        "correctAnswer": "Apollo 11"
      },
      {
        "question": "What is the name of our galaxy?",
        "options": ["Andromeda", "Triangulum", "Milky Way", "Sombrero"],
        "correctAnswer": "Milky Way"
      },
      {
        "question": "What is the closest neighboring galaxy to the Milky Way?",
        "options": ["Andromeda", "Triangulum", "Large Magellanic Cloud", "Small Magellanic Cloud"],
        "correctAnswer": "Andromeda"
      },
      {
        "question": "What is the term for a small, dense remnant of a star that has undergone a supernova explosion?",
        "options": ["Quasar", "Pulsar", "White Dwarf", "Neutron Star"],
        "correctAnswer": "Neutron Star"
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

    // Check if the selected answer is correct and update the score
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    // Move to the next question without checking for the selected answer
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(10); // Reset the timer for the next question
      setSelectedAnswer(null); // Reset the selected answer for the next question
    } else {
      // Quiz completed, show the total score or navigate to a different component/page
      alert(`Quiz Completed! Your total score is ${score}/${questions.length}`);
    }
  };

  return (
    <div className="quiz-page flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat">
      <div className="quiz-card bg-white bg-opacity-80 p-8 rounded-md text-center max-w-md">
        <QuizQuestion
          question={questions[currentQuestion].question}
        //   options={questions[currentQuestion].options}
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
