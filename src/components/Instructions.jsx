import React from "react";
import { Link } from "react-router-dom";
import "./Instructions.css";

function Instructions() {
  return (
    <div className="rules-container">
      <h1>How to Play</h1>
      <div className="rules">
        <p>1. Click the "Start Game" button to begin.</p>
        <p>
          2. You will be presented with a series of multiple-choice questions.
        </p>
        <p>
          3. Choose your answer and click "Next" to move on to the next
          question.
        </p>
        <p>
          4. Once you've answered all the questions, you will see your score.
        </p>
      </div>
      <Link to="/quiz">
        <button>Start Game</button>
      </Link>
    </div>
  );
}

export default Instructions;
