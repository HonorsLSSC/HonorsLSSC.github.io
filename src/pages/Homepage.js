import React from 'react'
import './Homepage.css'
import'../App.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar.js'

export default function Homepage({openTutorial}) {
  return (
    <React.Fragment>
        <Navbar openTutorial={openTutorial}/>
        <br></br>
        <br></br>
        <div className='wrapper'>
            <br />
            <h6 className='title'>Thank you for choosing to use Karlins 2.0!</h6>
            <h6 className='letter'>
            Karlins 2.0 was made to help anyone working with Professor Amber 
            Karlins resolve their issues quickly and efficiently. Karlins 2.0 can 
            answer many of the common problems you may have, whether in financial 
            aid or if you need an email. Karlins 2.0 can understand free-form 
            texting. Just be brief, and hopefully, we can find something that 
            helps you. If for whatever reason, the bot isn't able to help, we can 
            direct you to someone in the area you need to be addressed. Thank you 
            for giving us a shot! Hopefully, this will lead to more efficient 
            communications not only just for you but for the faculty working with 
            you as well.
            </h6>
            <h6 className='sign'>
                Thanks again for using our bot, <br></br>
                Joshua Martinez <br></br>
                Karlins 2.0 Dev
            </h6>
            <br />
            <br />
        </div>
    </React.Fragment>
  )
}
