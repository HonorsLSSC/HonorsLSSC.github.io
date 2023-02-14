import React from 'react'
import './Warning.css'

export default function Warning({hideWarning}) {
  return (
    <div className='warning'>
        {/* <p className='text'> */}
            NOTE: Karlins 2.0 is has been down as of 2/11/2022. It seems that BotPress 
            Cloud no longer supports our bot. We will resume normal operation once we figure 
            out a solution. ETA unknown.  <i className="fa-solid fa-x align-right hover" onClick={hideWarning}></i>
    </div>
  )
}
