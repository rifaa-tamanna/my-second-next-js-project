'use client'

import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0)
    console.log('Counter component rendered')



    const handleIncrease = () => {
        console.log('Increase button clicked')
        setCount(count + 1)
    }


    return (
        <div>
            <div className="text-4xl font-bold">Counter: {count}</div>

            <button
            onClick={handleIncrease} 
            className='border-1-solid bg-amber-200 py-4 px-8 rounded text-black hover:bg-amber-100'>Increase</button>
        </div>
    );
};

export default Counter;