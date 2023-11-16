import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/QuizMenu";
import Quiz from "./components/QuizCard";
import Guide from "./components/Instructions";
import "./App.css";

/*
// App component manages the application state and renders components accordingly
function App() {
  // State to keep track of whether the quiz has started or not
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  // Function to start the quiz
  const startQuiz = () => {
    setIsQuizStarted(true);
    setShowMenu(false);
  };

  // Function to show the menu
  const showMainMenu = () => {
    setIsQuizStarted(false);
    setShowMenu(true);
  };

  //Conditional rendering: If quiz has started, render Quiz component; otherwise, render GameMenu component
  //return <div>{isQuizStarted ? <Quiz /> : <Menu startQuiz={startQuiz} />}</div>;

  // Conditional rendering: Show Menu or Quiz based on states
  return (
    <div className="app-container">
      { Render Menu if showMenuAfterQuiz is true }
      {showMenu && <Menu startQuiz={startQuiz} />}

      {Render Quiz if isQuizStarted is true }
      {isQuizStarted && <Quiz showMainMenu={showMainMenu} />}
    </div>
  );
}

export default App;
*/

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Menu />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="instructions" element={<Guide />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
