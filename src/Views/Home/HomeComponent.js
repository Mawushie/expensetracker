import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";

const HomeComponent = (props) => {
  const [transactions, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);
  const addTransaction = (transactionDetails) => {
    const transactionsArray = [...transactions];
    transactionsArray.push(transactionDetails);
    updateTransaction(transactionsArray);
  };
  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((transactionDetails) => {
      transactionDetails.type === "Expense"
        ? (exp = exp + transactionDetails.amount)
        : (inc = inc + transactionDetails.amount);
    });
    updateExpense(exp);
    updateIncome(inc);
  };

  useEffect(() => calculateBalance(), [transactions]);

  return (
    <Container>
      <OverviewComponent
        addTransaction={addTransaction}
        expense={expense}
        income={income}
      />
      <TransactionComponent transactions={transactions} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Montserrat;
  margin: 30px 0 10px;
  min-width: 360px;
`;

export default HomeComponent;
