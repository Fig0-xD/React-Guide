import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const editingToggler = () => {
        setIsEditing(!isEditing);
    }

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={editingToggler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={editingToggler}
                />
            )}
        </div>
    );
};

export default NewExpense;