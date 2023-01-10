import React, { useState } from 'react'
import './Faq.css'
import Navbar from '../components/Navbar'

export default function Faq({openTutorial}) {
     // Sets up clickable evvents for quesiton 1
     const [why, showWhy] = useState(false)
     const openWhy = () => {
         showWhy(true)
     }
     const closeWhy = () => {
         showWhy(false)
     }
     // Sets up clickable evvents for quesiton 2
     const [privacy, showPrivacy] = useState(false)
     const openPrivacy = () => {
         showPrivacy(true)
     }
     const closePrivacy = () => {
         showPrivacy(false)
     }
     // Sets up clickable evvents for quesiton 3
     const [help, showHelp] = useState(false)
     const openHelp = () => {
         showHelp(true)
     }
     const closeHelp = () => {
         showHelp(false)
     }
     // Sets up clickable evvents for quesiton 4
     const [bugs, showBugs] = useState(false)
     const openBugs = () => {
         showBugs(true)
     }
     const closeBugs = () => {
         showBugs(false)
     }

  return (
    <React.Fragment>
        <Navbar />
        <div className='body'>
            <ul className='list'>
                <li className='hover'onClick={openWhy}>
                    Why should I use this bot? <i className="fa-sharp fa-solid fa-caret-down align-right"></i>
                </li>
                {why && <div className='card'>
                    <i className="fa-solid fa-x align-right hover" onClick={closeWhy}></i>
                    <p className='answer'>
                        Karlins 2.0 was made to help students find quick answers to common question exactly how 
                        Professor Karlins would answer them. This helps people learn what they need to know,
                        while also keeping Professor Karlins available to any of her tasks. I hope this helps!
                    </p>
                </div>}
                <br></br>
                <li className='hover'onClick={openPrivacy}>
                    Will anyone be able to see what I type? <i class="fa-sharp fa-solid fa-caret-down align-right"></i>
                </li>
                {privacy && <div className='card'>
                    <i className="fa-solid fa-x align-right hover" onClick={closePrivacy}></i>
                    <p className='answer'>
                        No, no one is able to see what you type to Karlins 2.0. The only text people will see is if you
                        submit a feedback ticket. Only Professor Karlins and the current Student Assistant can see those.
                        I hope this helps!
                    </p>
                </div>}
                <br></br>
                <li className='hover'onClick={openHelp}>
                    What if the bot doesn't help? <i class="fa-sharp fa-solid fa-caret-down align-right"></i>
                </li>
                {help && <div className='card'>
                    <i className="fa-solid fa-x align-right hover" onClick={closeHelp}></i>
                    <p className='answer'>
                        Karlins 2.0 is designed to redirect you to specific faculty members who are best suited to
                        answer your question at the end of a conversation. When Karlins 2.0 asks if the information
                        it gave you was helpful, say "No", and also say "No" to the following question about retrying.
                        That should give you an email to someone who can help you. I hope this helps!
                    </p>
                </div>}
                <br></br>
                <li className='hover'onClick={openBugs}>
                    Who do I contact if there are bugs? <i className="fa-sharp fa-solid fa-caret-down align-right"></i>
                </li>
                {bugs && <div className='card'>
                    <i className="fa-solid fa-x align-right hover" onClick={closeBugs}></i>
                    <p className='answer'>
                        If you are encountering bugs, you can submit a feedback ticket. You can do this through the sidebar
                        on any page of the site. With this information, someone will be able improve the bot. If you would rather email someone directly, you can send an email
                        to Joshuacoreymartinez@gmail.com. I hope this helps!
                    </p>
                </div>}
            </ul>
        </div>
    </React.Fragment>
  )
}
