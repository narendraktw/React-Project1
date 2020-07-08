import React from 'react'

// function Greet(){
//     return <h1>Hello Narendra</h1>
// }

//export const Greet = () => <h1>Hello Narendra</h1>

const Greet = props =>{
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name}  {props.heroname}</h1>
            {props.children}
        </div>
    )
}


export default Greet;