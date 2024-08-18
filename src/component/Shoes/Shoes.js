import React from 'react';
import { add, multiply } from '../../Utilities/Calculate';

const Shoes = () => {
    const first = 55;
    const second = 45;
    const result = multiply(first, second);
    const sum = add(first, second);
    return (
        <div>
            <h2>this is shoes page </h2>
            <p>multyply: {result} and total{sum}</p>
        </div>
    );
};

export default Shoes;