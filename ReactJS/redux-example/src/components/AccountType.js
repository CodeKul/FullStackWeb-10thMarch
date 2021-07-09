import React from "react";
import { useSelector } from "react-redux";

function AccountType() {
  const accType = useSelector((state) => state.isSavings);
  console.log(accType);
  return (
    <div>
      <h2 className="acct-type">
        {accType ? "Savings Account" : "Current Account"}
      </h2>
    </div>
  );
}

export default AccountType;
