import React from "react";
import { Field, reduxForm } from "redux-form";
import "./IncomeForm.css";

import DatePicker, {
  FieldDatePicker,
  formatDates,
  normalizeDates,
} from "../DatePicker/DatePicker";

const IncomeFormFunc = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="formControl">
        <label>
          Enter Amount:
          <Field id="amount" name="amount" component="input" type="number" />
        </label>
      </div>
      <div className="formControl">
        <label>
          Category:
          <Field id="category" name="category" component="select">
            <option value="Salary">Salary</option>
            <option value="Loan">Loan</option>
            <option value="Other">Other</option>
          </Field>
        </label>
      </div>
      <div className="formControl">
        <label>
          Date and Time:
          <FieldDatePicker name="date" />
          <Field
            name={"dateEnd"}
            component={DatePicker}
            parse={normalizeDates}
            format={formatDates}
          />
        </label>
      </div>
      <div className="formControl">
        <label>
          Description:
          <Field id="description" name="description" component="textarea" />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const IncomeForm = reduxForm({
  form: "incomeForm",
})(IncomeFormFunc);

export default IncomeForm;
