import React, {useContext, useState, useEffect} from 'react';
import {AppContext} from '../context/AppContext';
const Budget =() => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        // Dispatch an action to update the budget in the context
        dispatch({ type: 'SET_BUDGET', payload: event.target.value });
    };

return (
    <div className='alert alert-secondary'>
        <span>Budget: £{newBudget}</span>
        <input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
    </div>
);
};
export default Budget;