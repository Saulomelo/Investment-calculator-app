import NewInvestmentForm from "./NewInvestmentForm";
const NewInvestment = (props) => {
  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlySavings;
    const expectedReturn = +userInput.percentageYear / 100;
    const duration = +userInput.durationYear;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
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
