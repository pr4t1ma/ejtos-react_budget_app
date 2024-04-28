import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//Code to import Budget.js
import Budget from "./components/Budget";

// Add code to import the other components here under

import { AppProvider } from "./context/AppContext";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpensesItem from "./components/ExpenseItem";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";
const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
             {" "}
          {
            /* Add Budget component here */
            <Budget />
          }
             {/* Add Remaining component here*/} 
          <Remaining />   Add ExpenseTotal component here 
          <ExpenseTotal /> {/* Add ExpenseList component here */} {" "}
          <ExpenseList />  {/* Add ExpenseItem component here */} 
          <ExpensesItem />  
          <AllocationForm />
          {/* Add AllocationForm component here under */}
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
