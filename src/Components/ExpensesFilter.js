import "./ExpensesFilter.css";

const ExpensesFilter = ({ values, filterValue, handelFilter }) => {
  return (
    <div className="expenses-filter expenses-filter__control">
      <label>Filter by year</label>
      <select
        value={filterValue}
        onChange={(event) => {
          handelFilter(event.target.value);
        }}
      >
        {values.map((v) => {
          return <option value={v}>{v}</option>;
        })}
      </select>
    </div>
  );
};

export default ExpensesFilter;
