import React, { useReducer } from "react";
function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + state.incrementBy,
        incrementBy: state.incrementBy,
      };
    case "decrement":
      return {
        count: state.count - state.incrementBy,
        incrementBy: state.incrementBy,
      };
    case "rangeIncrement":
      return { count: state.count, incrementBy: action.payload };
  }
}
function RangeCounter() {
  const [state, dispatch] = useReducer(countReducer, {
    count: 0,
    incrementBy: 1,
  });
  return (
    <div>
      <h4>{state.incrementBy}</h4>
      <input
        type="range"
        min="1"
        max="20"
        value={state.incrementBy}
        onChange={(e) =>
          dispatch({ type: "rangeIncrement", payload: Number(e.target.value) })
        }
      />
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default RangeCounter;
