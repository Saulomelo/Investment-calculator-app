import { useState } from "react";

const NewInvestmentForm = (props) => {
  const [enteredCurrentSavings, setCurrentSavings] = useState("");
  const [enteredYearlySavings, setYearlySavings] = useState("");
  const [enteredPercentageYear, setPercentageYear] = useState("");
  const [enteredDurationYear, setDurationYear] = useState("");

  const currentSavingsChangeHandler = (event) => {
    setCurrentSavings(event.target.value);
  };
  const yearlySavingsChangeHandler = (event) => {
    setYearlySavings(event.target.value);
  };
  const PercentageYearChangeHandler = (event) => {
    setPercentageYear(event.target.value);
  };
  const DurationYearChangeHandler = (event) => {
    setDurationYear(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const investmentData = {
      currentSavings: enteredCurrentSavings,
      yearlySavings: enteredYearlySavings,
      percentageYear: enteredPercentageYear,
      durationYear: enteredDurationYear,
    };

    props.onSubmitData(investmentData);

    //lifting function here
  };
  const resetHandler = () => {
    setCurrentSavings("");
    setYearlySavings("");
    setPercentageYear("");
    setDurationYear("");
    props.setInvestmentData([]);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={enteredCurrentSavings}
            onChange={currentSavingsChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={enteredYearlySavings}
            onChange={yearlySavingsChangeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={enteredPercentageYear}
            onChange={PercentageYearChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={enteredDurationYear}
            onChange={DurationYearChangeHandler}
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default NewInvestmentForm;
