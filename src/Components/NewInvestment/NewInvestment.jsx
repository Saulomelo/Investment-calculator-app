import NewInvestmentForm from "./NewInvestmentForm";
const NewInvestment = (props) => {
  //console.log();
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.percentageYear / 100;
    const duration = +userInput.durationYear;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    props.onCalculateInvestment(yearlyData);
  };
  return (
    <NewInvestmentForm
      onSubmitData={calculateHandler}
      setInvestmentData={props.setInvestmentData}
    />
  );
};

export default NewInvestment;
