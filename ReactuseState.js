import React, { useState } from 'react'

function ReactuseState() {
    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");
    const [count, setCount] = useState(0);
    function handleClick() {
        setName("Umesh Kumar Mehta")
        setRoll(1)
        setCount(count + 1)
    }
    return (
        <>
            <h1>Name:{name}</h1>
            <h1>Roll:{roll}</h1>
            <h1>Count:{count}</h1>
            <button type='button' onClick={handleClick}>Change</button>
        </>
    )
}

export default ReactuseState