import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./QuizCard.css";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function QuizCard() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);

  /*
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/quizData.json");
        const data = await response.json();
        setQuestions(data);
        console.log("Fetched data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  */

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/quizData.json");
        const data = await response.json();
        const shuffledQuestions = shuffleArray(data);
        setQuestions(shuffledQuestions);
        console.log("Fetched data:", shuffledQuestions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleNextQuestion = () => {
    setSelectedChoice(null); // Reset selected choice for the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleAnswer = (choiceIndex) => {
    // Update the selected choice
    setSelectedChoice(choiceIndex);
    if (choiceIndex === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  return (
    <div className="quiz-card">
      {questions.length > 0 && currentQuestion < questions.length ? (
        <>
          <h3>Question {currentQuestion + 1}</h3>
          {questions[currentQuestion].image_path && (
            <img src={questions[currentQuestion].image_path} alt="Question" />
          )}
          <h4 className="question">{questions[currentQuestion].question}</h4>
          <div className="options">
            {questions[currentQuestion].choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={
                  selectedChoice === index
                    ? questions[currentQuestion].answer === index
                      ? "correct"
                      : "incorrect"
                    : ""
                }
                disabled={selectedChoice !== null} // Disable the button if a choice is selected
              >
                {choice}
              </button>
            ))}
          </div>
          <button className="next-btn" onClick={handleNextQuestion}>
            Next
          </button>
        </>
      ) : (
        <div className="quiz-result">
          <p>Game ova! Yuh score ah</p>
          <p className="score">{score}</p>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/quiz">
            <button onClick={() => setCurrentQuestion(0)}>Play Again</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default QuizCard;
