import React, { useState } from 'react'

export default function React_UseState_Function() {
    const [count,setCout]=useState(0)
    const handleIncrement =() => {
        setCout(count+1)
    }
  return (
    <div>
        <h1>Count Done:{count}</h1>
        <button onClick={handleIncrement}> Increament Button</button>
    </div>

  )
}
