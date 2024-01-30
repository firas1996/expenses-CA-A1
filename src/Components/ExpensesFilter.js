import "./ExpensesFilter.css";

const ExpensesFilter = ({ values }) => {
  return (
    <div className="expenses-filter expenses-filter__control">
      <label>Filter by year</label>
      <select>
        {values.map((v) => {
          return <option value={v}>{v}</option>;
        })}
      </select>
    </div>
  );
};

export default ExpensesFilter;
