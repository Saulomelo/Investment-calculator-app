const InvestmentItem = (props) => {
  //console.log(props.items);
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.year}</td>
          <td>{props.totalSavings}</td>
          <td>{props.interest}</td>
          <td>{props.totalInterest}</td>
          <td>{props.investedCapital}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default InvestmentItem;
