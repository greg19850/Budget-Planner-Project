import React from "react";
import "./IncomeForm.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useSelector, useDispatch } from "react-redux";
import {
  addIncomeAmount,
  addIncomeCategory,
  addIncomeDate,
  addIncomeDescription,
} from "../../actions/incomeFormActions";

const IncomeForm = () => {
  const amount = useSelector((state) => state.incomeForm.incomeAmount);
  const category = useSelector((state) => state.incomeForm.incomeCategory);
  const date = useSelector((state) => state.incomeForm.incomeDate);
  const description = useSelector(
    (state) => state.incomeForm.incomeDescription
  );
  const dispatch = useDispatch();

  // handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  // handleDateChange = (date) => {
  //   this.setState({
  //     startDate: date,
  //   });
  // };

  // handleFormSubmit = (e) => {
  //   e.preventDefault();
  // };

  // cancelFormSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <form>
      <label>
        Enter Amount:
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={() => dispatch(addIncomeAmount)}
        />
      </label>
      <label>
        Category:
        <select
          id="category"
          name="category"
          value={category}
          onChange={() => dispatch(addIncomeCategory)}
        >
          <option value="Salary">Salary</option>
          <option value="Loan">Loan</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label>
        Date and Time:
        <DatePicker
          selected={date}
          name="date"
          onChange={() => dispatch(addIncomeDate)}
          timeInputLabel="Time:"
          dateFormat="dd/MM/yyyy h:mm aa"
          showTimeInput
        />
      </label>
      <label>
        Description:
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={() => dispatch(addIncomeDescription)}
        ></textarea>
      </label>

      <section className="buttons">
        <button>Save</button>
        <button>Cancel</button>
      </section>
    </form>
  );
};

export default IncomeForm;
