import React from "react";
import "./ExpenseItem.css";

function ExpenseItem({ arg }) {
  return (
    <div className="expense-item">
      <div>Date</div>
      <div className="expense-item__description">
        <h2>{arg}</h2>
        <div className="expense-item__price">Price</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
