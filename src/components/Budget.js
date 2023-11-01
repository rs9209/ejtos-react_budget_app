import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget , dispatch ,expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if(event.target.value >= totalExpenses) {
           if (event.target.value > 20000){
            alert("Budget cannot exceed 20000");
           }
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
            });
            setNewBudget(event.target.value);
        } else {
            alert("You cannot Reduce the budget value lower than the spending");
        }
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency} </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;