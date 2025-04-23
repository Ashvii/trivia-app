import { useEffect, useState } from "react";

export default function Timer({ setStop, questionNumber }) {
  const [time, setTime] = useState(getInitialTime(questionNumber));

  function getInitialTime(level) {
    if (level <= 3) return 30;
    if (level <= 6) return 20;
    return 20;
  }

  useEffect(() => {
    setTime(getInitialTime(questionNumber)); // Reset time on new question
  }, [questionNumber]);

  useEffect(() => {
    if (time === 0) {
      setStop(true);
    }
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, setStop]);

  return <div>{time}</div>;
}
