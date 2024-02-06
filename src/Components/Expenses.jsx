import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  let years = new Set(expenses.map((item) => item.date.getFullYear()).sort());
  const [filterValue, setFilterValue] = useState([...years][0]);

  return (
    <div className="expenses">
      <ExpensesFilter
        values={[...years]}
        filterValue={filterValue}
        handelFilter={setFilterValue}
      />
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
