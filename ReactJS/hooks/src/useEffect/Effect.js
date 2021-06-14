import React, { useState, useEffect } from "react";

function Effect() {
  const [render, setRender] = useState(0);
  useEffect(() => console.log("Render: " + render),[]);

  //useEffect -componentDidMount
  //useEffect(function,[optional dependency array])
  //useEffect(function,[]) //empty array executed only once (first time)
  //useEffect(function,[state,props])
  return (
    <div>
      <button onClick={() => setRender((r) => r + 1)}>Re-render</button>
    </div>
  );
}

export default Effect;
