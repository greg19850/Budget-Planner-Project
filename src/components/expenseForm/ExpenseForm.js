import React, { Component } from "react";
import "./ExpenseForm.css";
import { connect } from "react-redux";
import {
  addExpense,
  addExpenseDetails,
} from "../../actions/accountSummaryActions";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ExpenseForm extends Component {
  state = {
    expenseAmount: "",
    expenseCategory: "Clothes",
    expenseDate: new Date(),
    expenseDescription: "",
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleDateChange = (expenseDate) => {
    this.setState({
      expenseDate,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.addExpense(parseFloat(this.state.expenseAmount));

    this.props.addExpenseDetails(this.state);

    this.setState({
      expenseAmount: "",
      expenseCategory: "Clothes",
      expenseDate: new Date(),
      expenseDescription: "",
    });
  };

  handleFormFieldsReset = (e) => {
    e.preventDefault();
    this.setState({
      expenseAmount: "",
      expenseCategory: "Clothes",
      expenseDate: new Date(),
      expenseDescription: "",
    });
  };

  render() {
    return (
      <form>
        <label>
          Amount:
          <input
            type="number"
            name="expenseAmount"
            id="amount"
            value={this.state.expenseAmount}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Category:
          <select
            id="category"
            name="expenseCategory"
            value={this.state.expenseCategory}
            onChange={this.handleChange}
          >
            <option value="Bills">Bills</option>
            <option value="Clothes">Clothes</option>
            <option value="Education">Education</option>
            <option value="Eating Out">Eating Out</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Food">Food</option>
            <option value="Fuel">Fuel</option>
            <option value="Gift">Gift</option>
            <option value="Health">Health</option>
            <option value="Holiday">Holiday</option>
            <option value="Household">Household</option>
            <option value="Shopping">Shopping</option>
            <option value="Travel">Travel</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Date and Time:
          <DatePicker
            selected={this.state.expenseDate}
            name="expenseDate"
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
            name="expenseDescription"
            value={this.state.expenseDescription}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <section className="buttons">
          <button onClick={this.handleFormSubmit}>Save</button>
          <button onClick={this.handleFormFieldsReset}>Reset</button>
        </section>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
  addExpenseDetails: PropTypes.func.isRequired,
};

const mapDispatchToProps = { addExpense, addExpenseDetails };

export default connect(null, mapDispatchToProps)(ExpenseForm);
