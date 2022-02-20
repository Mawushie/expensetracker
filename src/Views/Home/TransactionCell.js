import React from "react";
import styled from "styled-components";

const TransactionCell = (props) => {
  return (
    <Cell isExpense={props.transactionDetails.type === "Expense"}>
      <span>{props.transactionDetails.desc}</span>
      <span>${props.transactionDetails.amount}</span>
    </Cell>
  );
};

const Cell = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #e6e8e9;
  border-radius: 2px;
  border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
  width: 100%;
`;
export default TransactionCell;
