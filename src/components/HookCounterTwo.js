import React, { useState } from 'react'

function HookCounterTwo() {
    const [name, setName] = useState({ FirstName: '', LastName: '' })
    return (
        <form>
            <input
                type='text'
                value={name.FirstName}
                onChange={e => setName({...name, FirstName: e.target.value })} />
            <input
                type='text'
                value={name.LastName}
                onChange={e => setName({...name,  LastName: e.target.value })} />
            <h2>Your firstName is: {name.FirstName}</h2>
            <h2>Your lastName is: {name.LastName}</h2>
        </form>
    )
}

export default HookCounterTwo
