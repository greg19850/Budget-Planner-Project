import React, { Component } from "react";
import "./ExpenseForm.css";
import { connect } from "react-redux";
import { addExpense } from "../../actions/accountSummaryActions";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ExpenseForm extends Component {
  state = {
    amount: "",
    category: "Clothes",
    date: new Date(),
    description: "",
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleDateChange = (date) => {
    this.setState({
      date,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.addExpense(parseFloat(this.state.amount));

    this.setState({
      amount: "",
      category: "Clothes",
      date: new Date(),
      description: "",
    });
  };

  handleFormFieldsReset = (e) => {
    e.preventDefault();
    this.setState({
      amount: "",
      category: "Clothes",
      date: new Date(),
      description: "",
    });
  };

  render() {
    return (
      <form>
        <label>
          Amount:
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
            selected={this.state.date}
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
            value={this.state.description}
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
};

const mapDispatchToProps = { addExpense };

export default connect(null, mapDispatchToProps)(ExpenseForm);
