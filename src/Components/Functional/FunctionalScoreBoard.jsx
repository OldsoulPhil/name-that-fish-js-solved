import "../styles/functionalstyles/score-board.css";
//  Where the score is presented

export const FunctionalScoreBoard = ({
  answersLeft,
  incorrectAnswers,
  correctAnswers,
}) => (
  <div id="score-board">
    <div>Incorrect 🔻: {incorrectAnswers}</div>
    <div id="choices-left">
      {answersLeft.map((answer) => (
        <div key={answer} className="choice">
          {answer}
        </div>
      ))}
    </div>
    <div>Correct ✅: {correctAnswers}</div>
  </div>
);
