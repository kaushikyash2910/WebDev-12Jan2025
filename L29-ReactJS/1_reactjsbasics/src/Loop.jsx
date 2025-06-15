import React from 'react'

const Loop = () => {
    let hobbies = ["Cricket", "Dance", "Sing"];

  return (
    <ul>
        My hobbies
        {hobbies.map((h,i)=>{
            return <li key={i}> {h} </li>
        })}
    </ul>
  )
}

export default Loop
