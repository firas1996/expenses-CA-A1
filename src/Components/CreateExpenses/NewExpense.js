import { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = ({ getData }) => {
  const [showNew, setShowNew] = useState(false);
  return (
    <div className="new-expense">
      {showNew && <NewExpenseForm getData={getData} setShowNew={setShowNew} />}
      {!showNew && (
        <button
          onClick={() => {
            setShowNew(true);
          }}
        >
          Add New Expense
        </button>
      )}
      {/* {showNew ? (
        <NewExpenseForm getData={getData} setShowNew={setShowNew} />
      ) : (
        <button
          onClick={() => {
            setShowNew(true);
          }}
        >
          Add New Expense
        </button>
      )} */}
    </div>
  );
};

export default NewExpense;
