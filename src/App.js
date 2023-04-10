import Expenses from "./Components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./Components/NewExpense/NewExpense";

let DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "school fee",
    amount: 250,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e2",
    title: "Books",
    amount: 230,
    date: new Date(2021, 2, 22),
  },
  {
    id: "e3",
    title: "House Rent",
    amount: 700,
    date: new Date(2021, 4, 12),
  },
  {
    id: "e4",
    title: "Food",
    amount: 540,
    date: new Date(2021, 5, 5),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
