import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import Chart from "./Chart/Chart";
import ChartData from "./Chart/ChartData";

const Expenses = ({ expenses }) => {
  let years = new Set(expenses.map((item) => item.date.getFullYear()).sort());
  const [filterValue, setFilterValue] = useState([...years][0]);
  const results = expenses.filter((item) => {
    return item.date.getFullYear() == filterValue;
  });
  return (
    <div className="expenses">
      <ExpensesFilter
        values={[...years]}
        filterValue={filterValue}
        handelFilter={setFilterValue}
      />
      <ChartData expenses={results} />
      {results.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            price={expense.price}
            key={expense.id}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
