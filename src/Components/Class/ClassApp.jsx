import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export class ClassApp extends Component {
  state = {
    incorrectAnswerCount: 0,
    correctAnswerCount: 0,
    fishIndex: 0,
  };

  render() {
    const { correctAnswerCount, fishIndex, incorrectAnswerCount } = this.state;
    const doAnswersStillExist = initialFishes.length - fishIndex > 0;

    this.handleGuess = (guess) => {
      this.setState({ fishIndex: fishIndex + 1 });
      if (initialFishes[fishIndex].name === guess) {
        this.setState({ correctAnswerCount: correctAnswerCount + 1});
      } else {
        this.setState({ incorrectAnswerCount: incorrectAnswerCount + 1});
      }
    };

    this.answersLeft = initialFishes.map((fish) => fish.name).slice(fishIndex);

    return (
      <>
        <>
          {doAnswersStillExist && (
            <ClassScoreBoard 
              answersLeft={this.answersLeft}
              incorrectAnswerCount={incorrectAnswerCount}
              correctAnswerCount={correctAnswerCount}
            />
          )}
          {doAnswersStillExist && (
            <ClassGameBoard
              fishIndex={initialFishes[fishIndex]}
              handleGuess={this.handleGuess}
            />
          )}
        </>
        {!doAnswersStillExist && (
          <ClassFinalScore
            correctAnswerCount={correctAnswerCount}
            totalCount={initialFishes.length}
          />
        )}
      </>
    );
  }
}
