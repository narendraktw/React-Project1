import React, { createElement } from 'react'

const Hello = () => {
    // return <div className='hello'>
    //     <h1>Hello Narendra</h1>
    //     </div>
    return React.createElement(
    'div',
    {id:'hello', className:'hello'},
    React.createElement('h1',null,'Hello Narendras')
    )
    
}


export default Hello