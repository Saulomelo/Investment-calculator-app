import InvestmentList from "./InvestmentList";
const Investment = ({ items }) => {
  return (
    //{/* Todo: Show below table conditionally (only once result data is available) */}
    //{/* Show fallback text if no data is available */}

    <InvestmentList items={items} />
  );
};

export default Investment;
