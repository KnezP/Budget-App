import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import { useCurrency } from './CurrencyContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    const { currentCurrency } = useCurrency();
    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Increase by 10</th>
              <th scope="col">Decrease by 10</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
            <tbody>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={`${expense.cost} ${currentCurrency}`} />
            ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;