import React, { useState } from "react";
import { ExpenseList } from "./ExpenseList/ExpenseList";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import "./Expense.css";
import { ExpenseChart } from "./ExpenseChart/ExpenseChart";

export const Expense = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (filterExpenseYear) => {
    setFilteredYear(filterExpenseYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChangeHandler={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </div>
  );
};
