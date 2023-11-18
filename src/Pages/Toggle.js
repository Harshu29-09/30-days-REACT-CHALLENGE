import React from 'react'
import { useState } from 'react'

function Toggle() {
    const[isToggled,setToggled]=useState(false);

    const handleChange =()=>{
        setToggled(!isToggled);
    }
  return (
    <div>
        <p>Toggle state : {isToggled?'Onnn':'off'}</p>
        <button onClick={handleChange}>{isToggled?'Turn off':'Turn On'}</button>

    </div>
     
  )
}

export default Toggle