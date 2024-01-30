import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
  let years = new Set(expenses.map((item) => item.date.getFullYear()).sort());
  // let p = {
  //   name: "afsdf",
  //   num: 45456,
  // };
  // console.log([...p.name]);
  console.log([...years]);
  return (
    <div className="expenses">
      <ExpensesFilter values={[...years]} />
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
