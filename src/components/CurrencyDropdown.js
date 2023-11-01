import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch , currency } = useContext(AppContext);
    const setCurrency = (curr) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: curr,
        });
    }

    return  (<select className="Currency" value={currency} name="Currency" id="currency" onChange={(event) => (setCurrency(event.target.value))}>
                <option  defaultValue value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Rupee">₹ Rupee</option>)
            </select>)
}

export default CurrencyDropdown;