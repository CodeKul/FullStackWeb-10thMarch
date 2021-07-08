import React, { useState } from "react";
import "./Bank.css";
function BankOperations() {
  const [amt, setAmt] = useState("");
  const getAmount = (e) => {
    setAmt(e.target.value);
  };
  return (
    <div className="container">
      <form>
        <div>
          <input
            type="text"
            className="input-balance"
            value={amt}
            onChange={getAmount}
          />
        </div>
        <button className="btn">Deposit</button>
        <button className="btn">Withdraw</button>
        <button className="btn">Interest</button>
        <button className="btn">Delete</button>
        <button className="btn">Change Account Type</button>
      </form>
    </div>
  );
}

export default BankOperations;
