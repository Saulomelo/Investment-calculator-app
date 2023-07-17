import { useState } from "react";
import InvestmentItem from "./InvestmentItem";

const InvestmentList = ({ items }) => {
  let aux = 0;
  const formatCurrency = (currrency) => {
    return currrency.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <>
      {items && items.length > 0 ? (
        <div>
          {items.map((investment, index) => {
            aux += investment.yearlyInterest;
            return (
              <div key={index}>
                <InvestmentItem
                  year={investment.year}
                  totalSavings={formatCurrency(investment.savingsEndOfYear)}
                  interest={formatCurrency(investment.yearlyInterest)}
                  totalInterest={formatCurrency(aux)}
                  investedCapital={formatCurrency(
                    investment.savingsEndOfYear - aux
                  )}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          No investment calculated yet.
        </div>
      )}
    </>
  );
};

export default InvestmentList;
