import React, { useState } from "react";
import "./counterStyle.css";

const CounterWithHooks = () => {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => (prevCounter > 1 ? prevCounter - 1 : 1));
  };

  return (
    <div className="counter">
      <span className="btn" onClick={incrementCounter}>
        <i className="bi bi-plus-circle"></i>
      </span>
      <spans className="num">{counter}</spans>
      <button className="btn" onClick={decrementCounter}>
        <i className="bi bi-dash-circle"></i>
      </button>
    </div>
  );
};

export default CounterWithHooks;
