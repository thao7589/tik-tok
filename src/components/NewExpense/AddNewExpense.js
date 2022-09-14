import React from "react";
import "./NewExpense.css";
import AddNewExpenseForm from "./AddNewExpenseForm";

const AddNewExpenses = (props) => {
  return (
    <div className="new-expense">
      <AddNewExpenseForm />
    </div>
  );
};

export default AddNewExpenses;
