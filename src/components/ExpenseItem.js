import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpensesItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({ type: "DELETE-EXPENSE", payload: "props.id" });
  };

  const increaseAllocation = () => {
    const expenses = { name: "name", cost: 10 };
    dispatch({
      type: "ADD-EXPENSE",
      payload: "expense",
    });
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.cost}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => increaseAllocation(props.name)}
        >
          +
        </button>
      </td>
      <td>
        <TiDelete size="2.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};
export default ExpensesItem;
