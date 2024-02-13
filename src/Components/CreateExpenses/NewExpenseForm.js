import React, { useState } from "react";

const NewExpenseForm = ({ getData, setShowNew }) => {
  //   const [title, setTitle] = useState("");
  //   const [price, setPrice] = useState("");
  //   const [date, setDate] = useState("");
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    date: "",
  });
  const changeTitle = (event) => {
    // setTitle(event.target.value);
    setInputs((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const changePrice = (event) => {
    // setPrice(event.target.value);
    setInputs((prevState) => {
      return { ...prevState, price: event.target.value };
    });
  };
  const changeDate = (event) => {
    // setDate(event.target.value);
    setInputs((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };
  const handelAll = ({ target: { name, value } }) => {
    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newExpenseData = {
      id: Math.random(),
      title: inputs.title,
      price: inputs.price,
      date: new Date(inputs.date),
    };
    getData(newExpenseData);
    setInputs({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            required
            placeholder="Title"
            minLength="3"
            maxLength="20"
            type="text"
            name="title"
            onChange={handelAll}
            value={inputs.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            required
            type="number"
            name="price"
            step="0.01"
            min="0"
            onChange={handelAll}
            value={inputs.price}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            type="date"
            min="2022-01-01"
            max="2025-12-31"
            name="date"
            onChange={handelAll}
            value={inputs.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          onClick={() => {
            setShowNew(false);
          }}
        >
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
