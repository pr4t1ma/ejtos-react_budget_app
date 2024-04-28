import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpensesItem from "./ExpenseItem";
import ExpenseTotal from "./ExpenseTotal";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Department</th>
          <th scope="col">Allocated Budget</th>
          <th scope="col">Increase by 10</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <h1>Expense</h1>
      </tbody>
      {expenses.map((expense) => (
        <ExpensesItem
          id={expense.id}
          key={expense.id}
          name={expense.name}
          cost={expense.cost}
        />
      ))}
    </table>
  );
};

export default ExpenseList;
