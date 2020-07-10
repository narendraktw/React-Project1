import React,{useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter
