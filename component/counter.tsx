"use client"; 

import React, { useState } from "react";

export default function Counter() { 
    const [ count, setCount ] = useState(0);  
    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base" onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <br />
            <div className="my-2">

            <button  className="my-2 flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-400 md:text-base" onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            </div>
        </div>
    )
}