import React, { useState, useRef } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(0);
  console.log(timerRef.current);
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current= 0 
  };
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button>Reset</button>
    </div>
  );
}

export default StopWatch;
