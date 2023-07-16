import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import NewInvestment from "./Components/NewInvestment/NewInvestment";
import Investment from "./Components/Investment/Investment";

function App() {
  const [investmentData, setInvestmentData] = useState();

  const setExpensesHandler = (investmentResult) => {
    setInvestmentData(investmentResult);
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <NewInvestment
        onCalculateInvestment={setExpensesHandler}
        setInvestmentData={setInvestmentData}
      />
      <Investment items={investmentData} />
    </div>
  );
}

export default App;
