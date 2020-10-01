import React from "react";
import "./AddExpense.css";
import ExpenseForm from "../expenseForm/ExpenseForm";

const AddExpense = () => (
  <>
    <h2>Please enter your expense details below:</h2>
    {<ExpenseForm />}
  </>
);

export default AddExpense;
