import React, { useState, useEffect } from "react";
/*
const MyButton = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "You clicked " + count + " times";
  });

  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked {count} times
    </button>
  );
};

*/

const MyButton = () => {
  const [seconds, setSeconds] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [res, setRes] = useState(false);

  useEffect(() => {
    let inter;
    if (isStart) {
      inter = setInterval(() => {
        setSeconds(seconds + 1);
        if (seconds === 60) {
          setSeconds(1);
          setMin(min + 1);
        }
        if (min === 60) {
          setHour(hour + 1);
          setMin(0);
        }
      }, 1000);
    }
    if (res) {
      setMin(0);
      setHour(0);
      setSeconds(0);
      setRes(false);
      setIsStart(false);
    }
    return () => clearInterval(inter);
  }, [seconds, min, isStart, res]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <button onClick={() => setIsStart(true)}>Start</button>
      <p style={{ width: "50px", height: "50px", backgroundColor: "red" }}>
        {hour}
      </p>
      <p style={{ width: "50px", height: "50px", backgroundColor: "red" }}>
        {min}
      </p>
      <p style={{ width: "50px", height: "50px", backgroundColor: "red" }}>
        {seconds}
      </p>
      <button onClick={() => setIsStart(false)}>Pause</button>
      <button onClick={() => setRes(true)}>Reset</button>
    </div>
  );
};
export default MyButton;
