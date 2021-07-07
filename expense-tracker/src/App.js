import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14)
    },
    {
        id: 'e2',
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 4, 28)
    },
    {
        id: 'e4',
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12)
    }
];


function App() {
    const [expenseList, setExpenseList] = useState(DUMMY_EXPENSES);


    const addExpenseHandler = (expense) => {
        setExpenseList((prevList) => {
            return [expense, ...prevList];
        });
    };

    //Under the hood React working!
    // return React.createElement(
    //     'div',
    //     {},
    //     React.createElement('h2', {}, "Let's get started"),
    //     React.createElement(Expenses, {list: expenses})
    // );


    return (
        <div>
            <NewExpense
                onAddExpense={addExpenseHandler}
            />
            <Expenses
                list={expenseList}
            />
        </div>
    );
}

export default App;
