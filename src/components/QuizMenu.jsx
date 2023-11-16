import React from "react";
import { Link } from "react-router-dom";
import "./QuizMenu.css";

//Displays the menu with instructions and a button to play the game
function QuizMenu() {
  return (
    <div className="game-menu">
      <h2>Jamaican Trivia Game</h2>
      <p>
        Welcome to Jamaican Trivia Game! Test your knowledge of Jamaican culture
        with our quiz!
      </p>
      <Link to="/quiz">
        <button>Start Game</button>
      </Link>
      <Link to="/instructions">
        <button>How to Play</button>
      </Link>
    </div>
  );
}

export default QuizMenu;
