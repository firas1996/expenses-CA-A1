import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expensesData = [
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
  return (
    <div>
      {expensesData.map((expense) => {
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
}

export default App;
