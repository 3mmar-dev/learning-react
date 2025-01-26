import { useCallback, useState } from "react";
import QUESTIONS from "../data/questions";
import QuizCompletedImg from "../assets/quiz-complete.png";
import Question from "./Question";

const Quiz = () => {
  // const [answerState, setAnswerState] = useState("unanswered");
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);

  const activeQuestionIndex = userAnswers.length;

  const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer: string | null
  ) {
    // setAnswerState("answered");
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });

    // setTimeout(() => {
    //   if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
    //     setAnswerState("correct");
    //   } else {
    //     setAnswerState("wrong");
    //   }

    //   setTimeout(() => {
    //     setAnswerState("unanswered");
    //   }, 2000);
    // }, 1000);
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (isQuizCompleted) {
    return (
      <div id="summary">
        <img src={QuizCompletedImg} />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        // answers={QUESTIONS[activeQuestionIndex].answers}
        // questionText={QUESTIONS[activeQuestionIndex].text}
        // onSelectAnswer={handleSelectAnswer}
        // answerState={answerState}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        onSkip={handleSkipAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
};

export default Quiz;
