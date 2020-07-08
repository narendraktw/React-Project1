import React from 'react'

function Person({name, key}) {
  return (
    <div>
      <h2>
     {key} {name}
      </h2>
    </div>
  )
}

export default Person