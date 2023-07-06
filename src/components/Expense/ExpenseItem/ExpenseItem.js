import React, { useState } from "react";
import { ExpenseDate } from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem({ expenses }) {
  const { date, amount, title } = expenses;
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  const [expenseTitle, setExpenseTitle] = useState(title);

  const clickHandler = () => {
    setExpenseTitle("Update");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={{ day: day, month: month, year: year }} />
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">{amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </li>
  );
}
export default ExpenseItem;
