import React from 'react'
import './Warning.css'

export default function Warning({hideWarning}) {
  return (
    <div className='warning'>
            NOTE: Karlins 2.0 is just recovering from a update. Things might not 
            work right, but we are back up. Your feedback is critical! Please fill 
            out feedback forms if you experience <strong>any</strong> issues!
            <i className="fa-solid fa-x align-right hover" onClick={hideWarning}></i>
    </div>
  )
}
