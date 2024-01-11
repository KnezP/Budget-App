import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useCurrency } from './CurrencyContext';
const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
    const { currentCurrency } = useCurrency();
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currentCurrency}{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;