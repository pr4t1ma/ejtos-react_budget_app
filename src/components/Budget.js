import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const valueChange = (e) => {
    setNewBudget(e.target.value);
  };
  return (
    <div className="alert alert-secondary">
      <span>Budgeet:${budget}</span>
      <input type="number" step="10" value={newBudget} onChange={valueChange} />
    </div>
  );
};

export default Budget;
