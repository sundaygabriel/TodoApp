import React from "react";
import { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div
      style={{
        border: "1px solid black ",
        width: "40%",
        margin: "auto",
        backgroundColor: "darkgreen",
      }}
    >
      <h1>COUNTER APP</h1>
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default CounterApp;
