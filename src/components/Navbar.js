import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom' 


export default function Navbar({openTutorial}) {
  return (
    <div className='bar'>
        <ul className='navbar'>
            <Link exact to='/'>
                <li className='nav'>
                    <h4 className='link'>Home</h4>
                </li>
            </Link>
            <Link exact to='/faq'>
                <li className='nav'>
                    <h4 className='link'>FAQ</h4>
                </li>
            </Link>
            <Link exact to='/about'>
                <li className='nav'>
                    <h4 className='link'>About</h4>
                </li>
            </Link>
            <a target={'_blank'} href='https://docs.google.com/forms/d/e/1FAIpQLSdrMDYiZqJkW5J7y3qb1-EbJV89f9CGyMMGCY63eQPWbvmumw/viewform?usp=sf_link'>
                <li className='nav'>
                    <h4 className='link'>Feedback</h4>
                </li>
            </a>
            <div>
                <li className='nav'>
                    <h4 className='link' onClick={openTutorial}>Tutorial</h4>
                </li>
            </div>
        </ul>
            
    </div>
  )
}
