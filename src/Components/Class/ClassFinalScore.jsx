import { Component } from "react";
import "../styles/classstyles/final-score.css";

export class ClassFinalScore extends Component {
  render() {
    const { correctAnswerCount, totalCount } = this.props;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctAnswerCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
