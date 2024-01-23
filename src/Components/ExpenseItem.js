import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ title, date, price }) {
  const [myTitle, setMyTitle] = useState(title);
  const updateTitle = () => {
    console.log(myTitle);
    setMyTitle("New Title 1 !!!");
    setMyTitle("New Title 2 !!!");
    setMyTitle("New Title 3 !!!");
    setMyTitle("New Title 4 !!!");
    console.log(myTitle);
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{myTitle}</h2>
        <div className="expense-item__price">$ {price}</div>
      </div>
      <button onClick={updateTitle}>Edit</button>
    </div>
  );
}

export default ExpenseItem;
