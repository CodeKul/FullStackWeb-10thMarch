import React, { useState, useEffect } from "react";

function Effect() {
  const [render, setRender] = useState(0);
  const [doNotRender, setNoRender] = useState(0);
  useEffect(() => console.log("Render"), [render]);

  //useEffect -componentDidMount
  //useEffect(function,[optional dependency array])
  //useEffect(function,[]) //empty array executed only once (first time)
  //useEffect(function,[state,props])
  return (
    <div>
      <p>{render}</p>
      <button onClick={() => setRender((r) => r + 1)}>Re-render</button>

      <p>{doNotRender}</p>
      <button onClick={() => setNoRender((nr) => nr + 1)}>No Render</button>
    </div>
  );
}

export default Effect;
