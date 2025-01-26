import { useState } from "react";
import Answers from "./Answers";
import ProgressBar from "./ProgressBar";
import QUESTIONS from "../data/questions";

type QuestionProps = {
  questionIndex: number;

  onSelectAnswer: (selectedAnswer: string | null) => void;
  selectedAnswer: string | null;
  onSkip: () => void;
};

const TIMEOUT = 10000;

type Answer = {
  selectedAnswer: string | null;
  isCorrect: null | boolean;
};

const Question = ({ onSelectAnswer, questionIndex, onSkip }: QuestionProps) => {
  const [answer, setAnswer] = useState<Answer>({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer(answer: string | null) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[questionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <div id="question">
      <ProgressBar
        // questionIndex={activeQuestionIndex} // The questionIndex helps React know when to throw away the old ProgressBar and create a   selectedAnswer,new one. By using the question index as the questionIndex, we make sure the ProgressBar resets every time you move to a new question! (changing the questionIndex will notify react to destroy and create a new instance of this component)
        timeout={TIMEOUT}
        onTimeout={onSkip}
      />

      <h2>{QUESTIONS[questionIndex].text}</h2>
      <Answers
        // questionIndex={activeQuestionIndex} // you can't use the same questionIndex for a sibling! (inside the same parent)
        // answers={QUESTIONS[questionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answers={QUESTIONS[questionIndex].answers}
        answerState={answerState}
        handleSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
};

export default Question;
