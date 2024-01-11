
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useCurrency } from './CurrencyContext';
const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const { currentCurrency } = useCurrency();
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currentCurrency}{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;