import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import plusImage from './plus.png'; 
import minusImage from './minus.png'; 

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 5,
        };

        dispatch({
            type: 'SUB_EXPENSES',
            payload: expense
        });

    }
    const imageSize = {
        width: '20px', 
        height: '20px', 
    };
    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.cost}</td>
        <td><button style={{backgroundColor:'transparent', border:'none'}} onClick={event=> increaseAllocation(props.name)}><img style={imageSize} src={plusImage} alt="Plus" /></button></td>
        <td><button style={{backgroundColor:'transparent', border:'none'}} onClick={event=> decreaseAllocation(props.name)}><img style={imageSize}src={minusImage} alt="Minus" /></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;