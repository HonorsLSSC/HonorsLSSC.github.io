import React from 'react'
import './Tutorial.css'

export default function Feedback({closeFeedback}) {
  return (
    <div className='modal-backdrop'>
        <div className='modal'>
        <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSdrMDYiZqJkW5J7y3qb1-EbJV89f9CGyMMGCY63eQPWbvmumw/viewform?embedded=true" 
        width="640" height="753" frameborder="0" marginheight="0" marginwidth="0">
                Loading…
        </iframe>
            <div>
                <button className='close' onClick={closeFeedback}>Close</button>
            </div>
        </div>
    </div>
  )
}
