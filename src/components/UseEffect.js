import React, { useState, useEffect } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)
    const [name, setNames] = useState('')

    useEffect(() => {
        console.log('updating doc title')
        document.title = `You clicked ${count} times`;
    },[count])
    return (
        <div>
            <input type='text' value={name} onChange={e=>setNames(e.target.value)}></input>
            <button onClick={() => setCount(count + 1)}>Count {count} times</button>
        </div>
    )
}

export default UseEffect
