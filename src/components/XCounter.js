import React, { useState } from 'react'

const XCounter = () => {
    const [value , setValue] = useState(0);

    const handleIncrement =()=>{
        setValue((prev)=> prev+1)
    }
    const handleDecrement =()=>{
        setValue((prev)=> prev-1)
    }

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {value}</p>
      <button type='button' onClick={handleIncrement}>Increment</button>
      <button type='button' onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default XCounter
