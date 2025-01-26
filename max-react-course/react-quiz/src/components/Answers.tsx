import { useRef } from "react";

type AnswersProps = {
  answers: string[];
  selectedAnswer: string | null;
  answerState: string;
  handleSelectAnswer: (selectedAnswer: string | null) => void;
};

function shuffleArray(array: string[]) {
  // Create a copy of the array to avoid modifying the original
  let shuffled = array.slice();

  for (let i = shuffled.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the current element with the element at the random index
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}

const Answers = ({
  answerState,
  answers,
  selectedAnswer,
  handleSelectAnswer,
}: AnswersProps) => {
  const shuffledAnswers = useRef<string[]>(null);

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = shuffleArray(answers);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";

        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }
        return (
          <li className="answer" key={answer}>
            <button
              disabled={answerState !== ""}
              className={cssClasses}
              onClick={() => handleSelectAnswer(answer)}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
