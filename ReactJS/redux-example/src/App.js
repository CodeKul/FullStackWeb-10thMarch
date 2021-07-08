import BankOperations from "./components/BankOperations";
import Balance from "./components/Balance";
import "./App.css";
import AccountType from "./components/AccountType";
function App() {
  return (
    <div className="container">
      
      <Balance />
      <BankOperations />
      <AccountType/>
    </div>
  );
}

export default App;
