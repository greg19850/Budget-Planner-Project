import React from "react";
import "./AddIncome.css";
import IncomeForm from "../incomeForm/IncomeForm";

const AddIncome = () => (
  <>
    <h2>Please enter your income details below:</h2>
    {<IncomeForm />}
  </>
);

export default AddIncome;
