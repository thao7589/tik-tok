import React from "react";
import "./ExpenseForm.css";
const AddNewExpenseForm = (props) => {
  const onShowNewExpenseForm = () => {
    return true;
  };
  return (
    <div className="new-expense show-new-expense-form">
      <form onClick={onShowNewExpenseForm}>
        <div>
          <div className="new-expense__actions">
            <button type="submit">Add New Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewExpenseForm;
