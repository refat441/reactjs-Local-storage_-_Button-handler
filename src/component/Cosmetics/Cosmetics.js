import React, { useEffect, useState } from 'react';
import CosmeticNew from '../CosmeticNew';

const Cosmetics = () => {
    const [cosmetics,setcosmetics] = useState([]);

useEffect( () => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setcosmetics(data))
}, [])
    return (
        <div>
            <h2>Welcome to my store</h2>
            {
                cosmetics.map(newcosmetic => <CosmeticNew key={newcosmetic.id} newcosmetic={newcosmetic}></CosmeticNew>)
            }
        </div>
    );
};

export default Cosmetics;