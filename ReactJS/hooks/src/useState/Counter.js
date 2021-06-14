import React, { useState } from "react";

function Counter() {
  //const arr = useState("abc");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("anc");
  const [arr, setArr] = useState([]);
  const[isLoggedIn,setIsLoggedIn]=useState(false)
  const [obj, setObj] = useState({});
  //console.log(arr); //undefined,f()

  const handleInc = () => {
    //this.setState({count:count+1})
    setCount((prev) => prev + 1); //1
    setCount((prev) => prev + 1); //1+1 = 2
  };
  const handleDec = () => {
    setCount(count - 1);
  };

  const addFruit = (e) => {
    setArr(arr.concat("abc"));
  };
 
  return (
    <div>
      <h1>Counter App</h1>
      {count}
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>

      {/* <input
        type="text"
        placeholder="Enter fruit"
        value={arr}
        onChange={addFruit}
      /> */}

      <button onClick={addFruit}>Add Fruit</button>
      {arr.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </div>
  );
}

export default Counter;
