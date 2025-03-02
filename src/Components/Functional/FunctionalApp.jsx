import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
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

export function FunctionalApp() {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const fishIndex = correctAnswers + incorrectAnswers;
  const doAnswersStillExist = initialFishes.length - fishIndex > 0;

  const handleGuess = (guess) => {
    if (initialFishes[fishIndex].name === guess) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }
  };

  const fishData = initialFishes.map((fish) => fish.name).slice(fishIndex);

  return (
    <>
      {doAnswersStillExist && (
        <FunctionalScoreBoard
          answersLeft={fishData}
          incorrectAnswers={incorrectAnswers}
          correctAnswers={correctAnswers}
        />
      )}
      {doAnswersStillExist && (
        <FunctionalGameBoard
          handleGuess={handleGuess}
          fishIndex={initialFishes[fishIndex]}
        />
      )}
      {!doAnswersStillExist && (
        <FunctionalFinalScore
          correctAnswers={correctAnswers}
          totalCount={initialFishes.length}
        />
      )}
    </>
  );
}
