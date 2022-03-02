import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TransactionCell from "./TransactionCell";

const TransactionComponent = (props) => {
  const [searchText, updateSearchText] = useState("");
  const [filteredTransaction, updateFilteredTxn] = useState(props.transactions);
  const handleSearch = (text) => {
    updateSearchText(text);
    updateFilteredTxn(
      props.transactions.filter((transactionDetails) =>
        transactionDetails.desc.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  useEffect(() => {
    if (props.transactions) {
      updateFilteredTxn(props.transactions);
    }
  }, [props.transactions]);
  return (
    <Container>
      Transactions
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      {filteredTransaction.map((transactionDetails) => (
        <TransactionCell transactionDetails={transactionDetails} />
      ))}
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
