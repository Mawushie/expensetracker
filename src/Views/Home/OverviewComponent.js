import React, { useState } from "react";
import styled from "styled-components";
import AddTransactionView from "./AddTransactionView";

const OverviewComponent = (props) => {
  const [isAddTxnVisible, toggleAddTxn] = useState(false);
  return (
    <Container>
      <BalanceBox>
        Balance : ${props.income - props.expense}
        <AddTransactionButton onClick={() => toggleAddTxn(!isAddTxnVisible)}>
          {isAddTxnVisible ? "CANCEL" : "ADD"}
        </AddTransactionButton>
      </BalanceBox>
      {isAddTxnVisible && (
        <AddTransactionView
          toggleAddTxn={toggleAddTxn}
          addTransaction={props.addTransaction}
        />
      )}
      <ExpenseIncomeContainer>
        <ExpenseIncomeBox isIcome={false}>
          Expense<span>${props.expense}</span>
        </ExpenseIncomeBox>
        <ExpenseIncomeBox isIcome={true}>
          Income<span>${props.income}</span>
        </ExpenseIncomeBox>
      </ExpenseIncomeContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Montserrat;
  margin: 10px;
  width: 100%;
`;

const BalanceBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  width: 100%;
  margin: 20px;
`;

const AddTransactionButton = styled.button`
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  border: transparent;
`;

const ExpenseIncomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  margin: 20px;
  width: 100%;
`;

const ExpenseIncomeBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 4px;
  padding: 20px;
  width: 135px;
  & span {
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => (props.isIcome ? "green" : "red")};
  }
`;

export default OverviewComponent;
