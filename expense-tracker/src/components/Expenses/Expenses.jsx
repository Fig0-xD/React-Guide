import React, {useState} from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";


const Expenses = (props) => {
    const [enteredYear, setEnteredYear] = useState("2021");

    const filterChangeHandler = (selectedYear) => {
        setEnteredYear(selectedYear);
    };

    const filteredExpenseList = props.list.filter(expense => expense.date.getFullYear().toString() === enteredYear);

    return (
        <Card className="expenses">
            <ExpensesFilter
                currentYear={enteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart
                expenses={filteredExpenseList}
            />
            <ExpensesList
                filteredList={filteredExpenseList}
            />
        </Card>
    );
};

export default Expenses;