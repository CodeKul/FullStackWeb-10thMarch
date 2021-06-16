import React, { useRef, useState } from "react";

function InputFocus() {
  const inputRef = useRef();
  //const [count, setCount] = useState(100);
  console.log(inputRef);  
//  inputRef= {
//     current:<input>
//   }
  //console.log(count);

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor="green"
    inputRef.current.style.color="white"
  };
  return (
    <div>
      <label htmlFor="">Enter value</label>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}

export default InputFocus;
//useRef -returns an object{current:undefined}
//const x =useRef(0)  {current:0}
//1) Updating a value of ref does not cause rerender
//2)value for ref persists between rerendering
//useRef - 1)Access the DOM
//let input = document.getElementById("firstName")
//<input type="text" >
//2) when you want values to persist between renders

//value - useState
//reference(tags) - useRef
