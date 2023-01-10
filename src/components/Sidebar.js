import React from 'react'
import { Link } from 'react-router-dom' 
import './Sidebar.css'

// simple function to stop users from trying to access unfinished components
const unfinished = () => {
    alert("I am currently under construction, please return later")
}

export default function Sidebar( {openTutorial, openFeedback} ) {
  return (
    
    <div className='sidebar'>
            <Link to='/'><img className='corner'src={require('./img/logo.png')}></img></Link>
        <ul>
            <br></br>
            <li className='nav'>
                <h2 className='link' onClick={openTutorial}>Show Tutorial</h2>
            </li>
            <br></br>
            <li>
                {/* <h2 className='link' onClick={openFeedback}>Submit Feedback</h2> */}
                <a className='nav' target={'_blank'} href='https://docs.google.com/forms/d/e/1FAIpQLSdrMDYiZqJkW5J7y3qb1-EbJV89f9CGyMMGCY63eQPWbvmumw/viewform?usp=sf_link'>
                    <h2 className='link'>Submit Feedback</h2>
                </a>
            </li>
            <br></br>
            <li className='nav'>
                <Link to='/about'><h2 className='link'>About This Bot</h2></Link>
            </li>
            <br></br>
            <li className='nav'>
                <h2 className='link' onClick={() => {window.botpressWebChat.sendEvent({ type: "show" })}}>Open Karlins 2.0</h2>
            </li>
        </ul>
        <Link to={'/faq'}> 
            <h3 className='faq'>
                <i className="fa-solid fa-circle-info"></i> FAQ
            </h3>
        </Link>
    </div>
  )
}