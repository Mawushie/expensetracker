import React, { useState } from "react";
import styled from "styled-components";
import TransactionCell from "./TransactionCell";

const TransactionComponent = (props) => {
  return (
    <Container>
      Transactions
      <input placeholder="Search" />
      {props.transactions.length
        ? props.transactions.map((transactionDetails) => (
            <TransactionCell transactionDetails={transactionDetails} />
          ))
        : ""}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  gap: 10px;

  & input {
    padding: 10px 12px;
    border-radius: 12px;
    background-color: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
    width: 100%;
    height: 24px;
  }
`;

export default TransactionComponent;
