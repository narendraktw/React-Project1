import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'Increment':
            return state + 1
        case 'Decrement':
            return state - 1
        case 'Reset':
            return initialState
        default:
            return state
    }
}

function UseReducerExm() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div> Count: {count}</div>
            <button type='button' onClick={() => dispatch('Increment')}>Increment</button>
            <button type='button' onClick={() => dispatch('Decrement')}>Decrement</button>
            <button type='button' onClick={() => dispatch('Reset')}>Reset</button>
        </div>
    )
}

export default UseReducerExm
