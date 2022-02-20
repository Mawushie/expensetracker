import React, { useState } from "react";
import styled from "styled-components";

const AddTransactionView = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("Expense");
  const addTransaction = () => {
    props.addTransaction({
      amount: Number(amount),
      desc,
      type,
      id: Date.now(),
    });
    console.log(amount, desc, type);
    props.toggleAddTxn();
  };
  return (
    <AddTransactionContainer>
      <input
        placeholder="Amount"
        value={amount}
        type="number"
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <RadioBox>
        <input
          type="radio"
          name="type"
          id="expense"
          value="Expense"
          checked={type === "Expense"}
          onChange={(e) => {
            setType(e.target.value);
          }}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          name="type"
          id="income"
          value="Income"
          checked={type === "Income"}
          onChange={(e) => {
            setType(e.target.value);
          }}
        />
        <label htmlFor="income">Income</label>
      </RadioBox>
      <AddTransaction onClick={addTransaction}>ADD TRANSACTION</AddTransaction>
    </AddTransactionContainer>
  );
};

const AddTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  gap: 20px;
  padding: 32px;
  margin: 20px;
  width: 85%;
  & input {
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid grey;
  }
`;

const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;

  & input {
    width: unset;
    margin: 0 10px;
  }
`;

const AddTransaction = styled.div`
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
`;

export default AddTransactionView;
