import React from 'react'
import './Tutorial.css'

export default function Tutorial({closeTutorial}) {
 return (
    <div className='modal-backdrop'>
        <div className='modal'>
            <h2>
                How do you use Karlins 2.0?
            </h2>
            <p>
                Using Karlins 2.0 is super easy. Just follow these steps
            </p>
            <h4>
                Step 1: Open the chat bot using the "Open Karlins 2.0" button
            </h4> 
            <p>
                This should be the button on the bottom
            </p>
            <h4>
                Step 2: Give a broad description of what your issue is.
            </h4>
            <p>
                If you need help with financial aid, just say something like "I 
                need help with financial aid" or you could just say "financial aid"
            </p> 
            <h4>
                Step 3: Follow the prompts!
            </h4>
            <p>
                If something isn't working, email me at <a href='mailto: joshuacoreymartinez@gmail.com'>Joshuacoreymartinez@gmail.com</a> and I will fix the bug and likely be
                able to direct you to the person you need
            </p>
            <p className='note'>Note: This site only supports portrait mode on mobile devices!</p>
            <div>
                <button className='close' onClick={closeTutorial}>Close</button>
            </div>
        </div>
    </div>
  )
}
