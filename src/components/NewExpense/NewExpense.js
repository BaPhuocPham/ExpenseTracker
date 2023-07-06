import React from "react";
import { ExpenseForm } from "../Expense/ExpenseForm/ExpenseForm";
import "./NewExpense.css";

export const NewExpense = ({ onAddExpenseHandler }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    onAddExpenseHandler(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDataHandler={saveExpenseDataHandler} />
    </div>
  );
};
