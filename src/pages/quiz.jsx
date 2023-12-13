import React, { useState, useEffect } from 'react';
import QuizQuestion from '../components/QuizQuestion';
import { Timer } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Update import
import '../index.css';

const QuizPage = () => {
    const navigate = useNavigate(); // Update hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const questions = [
        {
            "question": "What is the largest planet in our solar system?",
            "options": ["Saturn", "Jupiter", "Neptune", "Uranus"],
            "correctAnswer": "Jupiter"
        },
        {
            "question": "Which planet is known as the 'Red Planet'?",
            "options": ["Mars", "Jupiter", "Venus", "Saturn"],
            "correctAnswer": "Mars"
        },
        {
            "question": "What is the only natural satellite of Earth?",
            "options": ["Deimos", "Phobos", "Luna", "Triton"],
            "correctAnswer": "Luna"
        },
        {
            "question": "What is the name of the Mars rover that successfully landed in 2021 to search for signs of ancient life?",
            "options": ["Spirit", "Opportunity", "Curiosity", "Perseverance"],
            "correctAnswer": "Perseverance"
        },
        {
            "question": "Who was the first human to travel into space?",
            "options": ["Yuri Gagarin", "Alan Shepard", "John Glenn", "Neil Armstrong"],
            "correctAnswer": "Yuri Gagarin"
        },
        {
            "question": "What is the closest star to Earth?",
            "options": ["Alpha Centauri", "Sirius", "Proxima Centauri", "Betelgeuse"],
            "correctAnswer": "Proxima Centauri"
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
            "question": "What is the term for a small, dense remnant of a star that has undergone a supernova explosion?",
            "options": ["Quasar", "Pulsar", "White Dwarf", "Neutron Star"],
            "correctAnswer": "Neutron Star"
        },
        {
            "question": "What is a group of stars forming a recognizable pattern called?",
            "options": ["Constellation", "Galaxy", "Nebula", "Cluster"],
            "correctAnswer": "Constellation"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft((prevTime) => prevTime - 1);
            } else {
                handleNextQuestion();
                setTimeLeft(10);
                setSelectedAnswer(null);
            }
        }, 1000);
    
        return () => clearInterval(timer);
    }, [timeLeft, currentQuestion]); 
     
    const handleAnswer = (selectedOption) => {
        if (selectedOption !== selectedAnswer) {
            setSelectedAnswer(selectedOption);
    
            if (selectedOption === questions[currentQuestion].correctAnswer) {
                setScore((prevScore) => prevScore + 1);
                console.log('New Score:', score + 1);
            }
        }
    };
    
    
    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prevQuestion) => {
                const newQuestion = prevQuestion + 1;
                console.log('Next Question:', newQuestion);
                return newQuestion;
            });
            setTimeLeft(10);
            setSelectedAnswer(null);
        } else {
            setQuizCompleted(true);
        }
    };
        

    const handleQuizComplete = () => {
        return (
            <div className="quiz-completed-card bg-white bg-opacity-80 p-8 rounded-md text-center max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-black">Quiz Completed!</h2>
                <p className="text-lg mb-4 text-black">Your total score is {score}/{questions.length}</p>
                <button
                    className="next-button bg-green-500 text-white px-4 py-2 rounded-md"
                    onClick={() => navigate('/home')} 
                >
                    Home Page
                </button>
            </div>
        );
    };

    return (
        <div className="quiz-page flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat style={{ backgroundImage: `url(${})` }}">
            <div className="quiz-card bg-white bg-opacity-80 p-8 rounded-md text-center max-w-md relative">
                {quizCompleted ? (
                    handleQuizComplete()
                ) : (
                    <React.Fragment>
                        <div className="absolute top-[0.40rem] right-[1rem]">
                            <Timer style={{ color: 'black' }} />
                            <span className="ml-2" style={{ color: 'black' }}>{timeLeft}s</span>
                        </div>
                        <QuizQuestion
                            question={questions[currentQuestion].question}
                            selectedAnswer={selectedAnswer}
                            onAnswer={handleAnswer}
                        />
                        <div className="options-list text-left mt-4">
                            <ul>
                                {questions[currentQuestion].options.map((option, index) => (
                                    <li key={index} className="text-lg mb-2 option-item" onClick={() => handleAnswer(option)}>
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
                        <button
                            className="next-button bg-green-500 text-white px-4 py-2 rounded-md mt-4"
                            onClick={handleNextQuestion}
                        >
                            Next Question
                        </button>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default QuizPage;
