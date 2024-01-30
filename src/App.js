import { useState } from "react";
import NewExpense from "./Components/CreateExpenses/NewExpense";
import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expenses";

const oldData = [
  {
    id: 1,
    title: "New TV",
    price: 1234,
    date: new Date(2023, 4, 12),
  },
  {
    id: 2,
    title: "New Car",
    price: 9876,
    date: new Date(2024, 6, 30),
  },
  {
    id: 3,
    title: "Voyage",
    price: 2500,
    date: new Date(2024, 8, 20),
  },
  {
    id: 4,
    title: "Education",
    price: 7200,
    date: new Date(2024, 10, 15),
  },
];
function App() {
  const [expensesData, setExpensesData] = useState(oldData);
  const getData = (data) => {
    setExpensesData((prevState) => {
      return [data, ...prevState];
    });
  };
  return (
    <div>
      <NewExpense getData={getData} />
      {/* This is our first component */}
      <Expenses expenses={expensesData} />
    </div>
  );
}

export default App;
