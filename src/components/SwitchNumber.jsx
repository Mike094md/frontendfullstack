import React, { useState } from 'react'

function SwitchNumber() {
  const [number, setNumber] = useState(0)


  return (
    <div>
        <button onClick={() => setNumber(number + 1)}>+</button>
        <input type="number" value={number}  />
        <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  )
}

export default SwitchNumber