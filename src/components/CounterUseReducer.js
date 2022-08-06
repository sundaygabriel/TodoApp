import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    default:
      return state;
  }
};

const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ border: "1px solid black ", width: "40%", margin: "auto",  backgroundColor : "darkgreen"}}>
      <h3>Using useReduzer</h3>
      <button onClick={() => dispatch("increment")}>+</button>
      <p>{state.count}</p>
      <button onClick={() => dispatch("decrement")}>+</button>
    </div>
  );
};

export default CounterUseReducer;
