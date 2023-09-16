import React, { useState, useEffect } from 'react';
import './Game.css'

const McqGame = () => {
    const [questions, setQuestions] = useState([
        {
            question: `You give me blood, I will give you freedom Whose slogan was that?`,
            answers: [
                { text: 'Mahatma Gandhi', correct: false },
                { text: 'Subhash Chandra Bose', correct: true },
                { text: 'Shyamlal Gupta Councilor', correct: false },
                { text: 'Savarkar', correct: false }
            ]
        },
        {
            question: ' Who is called Napoleon of India?',
            answers: [
                { text: 'Pushyamitra', correct: false },
                { text: 'Kanishka', correct: false },
                { text: 'Chandragupta Maurya', correct: false },
                { text: 'Samudragupta', correct: true }
            ]
        },
        {
            question: 'Where is the Headquarters of the Indian Army?',
            answers: [
                { text: 'New Delhi', correct: true },
                { text: 'Mumbai', correct: false },
                { text: 'Nagpur', correct: false },
                { text: 'Kolkata', correct: false }
            ]
        },
        {
            question: ' What is the Highest Military Honour of India',
            answers: [
                { text: 'Padma Bhushan', correct: false },
                { text: 'Maha Vir Chakra', correct: false },
                { text: 'Bharat Ratna', correct: false },
                { text: 'Param Vir Chakra', correct: true }
            ]
        },
        {
            question: 'What is the Full Form of INS?',
            answers: [
                { text: 'Indian Navy System', correct: false },
                { text: 'Indian Navy Ship', correct: true },
                { text: 'Inertial Navigation Ship ', correct: false },
                { text: 'Indian Navigation System', correct: false }
            ]
        },
        {
            question: ` What is the name of the Wheel in the middle of the Indian Flag?`,
            answers: [
                { text: 'Veer Wheel', correct: false },
                { text: 'Ashoka Chakra', correct: true },
                { text: 'Spoke Chakra', correct: false },
                { text: 'Ashoka Wheel', correct: false }
            ]
        },
        {
            question: 'How many Spokes are on the Ashoka Chakra?',
            answers: [
                { text: '34', correct: false },
                { text: ' 12', correct: false },
                { text: '23', correct: false },
                { text: '24', correct: true }
            ]
        },
        {
            question: 'Which Honorary Rank does M.S Dhoni hold?',
            answers: [
                { text: 'Lieutenant Colonel', correct: true },
                { text: 'Lieutenant', correct: false },
                { text: 'Major', correct: false },
                { text: 'Captain', correct: false }
            ]
        },
        {
            question: 'When was the First Indo-Pak War?',
            answers: [
                { text: '1948', correct: false },
                { text: '1945', correct: false },
                { text: ' 1946', correct: false },
                { text: '1947', correct: true }
            ]
        },
        {
            question: 'What is the full form of NCC?',
            answers: [
                { text: ' Non-Cadet Corps', correct: false },
                { text: 'National Cadet Corps', correct: true },
                { text: 'National Candidate Corpsm', correct: false },
                { text: 'Naxa Cadet Corps', correct: false }
            ]
        },





    ]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);

    const startQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowNextButton(false);
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setShowNextButton(false);
    };

   
       
    const handleAnswerClick = (isCorrect) => {  
        if (isCorrect) {   
            setScore(score + 1);          
        }
        setShowNextButton(true);
    };



    useEffect(() => {
        if (currentQuestionIndex === questions.length) {
            // End of the quiz
            setShowNextButton(false);
        }
    }, [currentQuestionIndex, questions.length]);

    const currentQuestion = questions[currentQuestionIndex];

    return (
       
            <div className="app-container">
               
                <h1>Simple Quiz</h1>
                <div className="quiz">
                    <h2 id="question">{currentQuestion.question}</h2>
                    <div id="answer-buttons" >
                        {currentQuestion.answers.map((answer, index) => (
                            <button
                                key={index}
                                onClick={() =>handleAnswerClick(answer.correct)    
                            }
                                className="btn-game"
                                disabled={showNextButton}
                            >
                                {answer.text}
                            </button>
                        ))}
                    </div>
                    {currentQuestionIndex < questions.length - 1 ? (
                        <button id="next-btn" onClick={handleNextQuestion} style={{ display: showNextButton  ? 'block' : 'none' }}>
                            Next
                        </button>
                    ) : (
                        <div>
                            <p>You scored {score} out of {questions.length}!</p>
                            <button id="btn-play-again" onClick={startQuiz}>
                                Play Again
                            </button>
                        </div>
                    )}
                </div>
            </div>
       
    );
};

export default McqGame;
