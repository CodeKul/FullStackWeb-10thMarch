import React, { useState } from "react";

function Counter() {
  //const arr = useState("abc");
  const [count, setCount] = useState(0);

  //console.log(arr); //undefined,f()

  const handleInc = () => {
    //this.setState({count:count+1})
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      {count}
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
}

export default Counter;
