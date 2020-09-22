import React from "react";
import "./IncomeForm.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const IncomeForm = () => {
  return (
    <form>
      <label>
        Enter Amount:
        <input
          type="number"
          name="amount"
          id="amount"
          value={this.state.amount}
          onChange={this.handleChange}
        />
      </label>
      <label>
        Category:
        <select
          id="category"
          name="category"
          value={this.state.category}
          onChange={this.handleChange}
        >
          <option value="Salary">Salary</option>
          <option value="Loan">Loan</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label>
        Date and Time:
        <DatePicker
          selected={this.state.startDate}
          name="date"
          onChange={this.handleDateChange}
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
          value={this.state.text}
          onChange={this.handleChange}
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
