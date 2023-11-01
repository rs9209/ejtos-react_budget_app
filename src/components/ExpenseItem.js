import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch , currency } = useContext(AppContext);

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
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={{borderRadius : '50%',color : '#fff',backgroundColor : '#1abc9c',fontWeight : 'bold'}} onClick={event=> increaseAllocation(props.name)}><span style={{fontWeight : 'bold',color : '#fff',fontSize : '1.5rem'}} >+</span></button></td>
        <td><button style={{borderRadius : '50%',color : '#fff',backgroundColor : 'red',fontWeight : 'bold'}} onClick={event=> decreaseAllocation(props.name)}><span style={{fontWeight : 'bold',color : '#fff',fontSize : '1.5rem'}} >-</span></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;