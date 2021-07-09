import React from "react";
import { useSelector } from "react-redux";

function Balance() {
  const {balance} = useSelector((state) => state);
  //console.log(balanceAmount);
  return (
    <div>
      <h2>{balance}</h2>
    </div>
  );
}

export default Balance;
