// button handeler event

import React from 'react';
import './CosmeticNew.css';
import { addToDb, deleteShoppingCart, removeFromDb } from '../Utilities/fakedb';

const CosmeticNew = (props) => {
    const{ name , id, price} = props.newcosmetic;

    // Add data in storage & for button 
    const addToChat = (id) => {
        addToDb(id);
    }
    // const addToCardParamiter = () => addToChat(id);


    // Remove data
    const removeFromCart = id =>{
        removeFromDb(id);
    }

    //remove all data at once
    const deleteAll = id =>{
        deleteShoppingCart(id);
    }

    return (
        <div className='look'>
            <p>buy this {name}</p>
            <p>only for {id}</p>
            <p>sell {price}</p>
            <button onClick={() => addToChat(id)}>Add to chat</button>
            {/* <button onClick={addToCardParamiter}>Add to chat</button> */}
            <button onClick={() => removeFromCart(id)}>Remove</button>
            <button onClick={() => deleteAll(id)}>Delete All</button>
        </div>
    );
};

export default CosmeticNew;