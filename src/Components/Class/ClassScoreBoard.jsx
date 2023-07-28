import { Component } from "react";
import "../styles/classstyles/score-board.css";

export class ClassScoreBoard extends Component {
  render() {
    const { answersLeft, incorrectAnswerCount, correctAnswerCount} = this.props;

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectAnswerCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctAnswerCount}</div>
      </div>
    );
  }
}
