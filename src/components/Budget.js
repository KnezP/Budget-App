import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { useCurrency } from './CurrencyContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const { currentCurrency } = useCurrency();

  const [newBudget, setNewBudget] = useState(budget);

  useEffect(() => {
    setNewBudget(budget);
  }, [budget]);

  const handleBudgetChange = (event) => {
    let updatedBudget = event.target.value;
    updatedBudget = Math.max(0, updatedBudget);
    setNewBudget(updatedBudget);
    dispatch({ type: 'SET_BUDGET', payload: updatedBudget });
  };

  return (
    <div>
      <div className='alert alert-secondary'>
        <span>Budget: </span>
        <span>{currentCurrency} </span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
      </div>
    </div>
  );
};

export default Budget;
