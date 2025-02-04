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
        <td><button style={{borderRadius : '50%',color : '#fff',backgroundColor : '#1abc9c',fontWeight : 'bold',fontSize : '1.5rem',padding : '0px', border : '0',height : '30px', width : '30px', textAlign : 'center' , verticalAlign : 'middle', margin : 'auto' , lineHeight : '0px'}} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={{borderRadius : '50%',color : '#fff',backgroundColor : 'red',fontWeight : 'bold',fontSize : '1.5rem',padding : '0px', border : '0' ,height : '30px', width : '30px' , textAlign : 'center' , verticalAlign : 'middle', margin: 'auto' , lineHeight :'0px'}} onClick={event => decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;