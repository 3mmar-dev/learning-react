import { useEffect, useState } from "react";

type ProgressBarProps = {
  timeout: number;
  onTimeout: () => void;
  // newQuizIndex: number;
};

const ProgressBar = ({
  timeout,
  onTimeout,
}: // newQuizIndex,
ProgressBarProps) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 75);
    }, 75);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress max={timeout} value={remainingTime} id="question-time" />;
};

export default ProgressBar;
