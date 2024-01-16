import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ expenses }) => {
  return (
    <div className="expenses">
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
