import React, { Component } from "react";
import "./Start.css";
import IncomeSummary from "../incomeSummary/IncomeSummary";
import ExpenseSummary from "../expenseSummary/ExpenseSummary";
import Balance from "../balance/Balance";
import Graphic from "../graphics/Graphic";

import { connect } from "react-redux";
import { getItems } from "../../actions/accountSummaryActions";
import PropTypes from "prop-types";

class Start extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { summary } = this.props;
    return (
      <section id="summary">
        <div className="moneySummary">
          <IncomeSummary income={summary.incomeSummary} />
          <ExpenseSummary expense={summary.expenseSummary} />
          <Balance balance={summary.balanceSummary} />
        </div>
        <div className="graphic">
          <Graphic
            income={summary.incomeSummary}
            expense={summary.expenseSummary}
          />
        </div>
      </section>
    );
  }
}

Start.propTypes = {
  getItems: PropTypes.func.isRequired,
  summary: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  summary: state.accountSummary,
});

export default connect(mapStateToProps, { getItems })(Start);
