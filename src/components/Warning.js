import React from 'react'
import './Warning.css'

export default function Warning({hideWarning}) {
  return (
    <div className='warning'>
            NOTE: Karlins 2.0 is under new management! Alex will be taking over the bot for the 2023-2024 academic year. 
            Please fill out feedback forms. They are critical to improving the bot!
            <i className="fa-solid fa-x align-right hover" onClick={hideWarning}></i>
    </div>
  )
}
