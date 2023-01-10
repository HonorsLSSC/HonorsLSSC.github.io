import React from 'react'
import Navbar from '../components/Navbar'
import './About.css'

export default function About({openTutorial}) {
  return (
    <div>
      <Navbar />
        <br></br>
        <div className='wrapper'>
            <br></br>
            <h4>
                Karlins 2.0 is a chatbot designed to get your questions answered as quick as possible. While Professor Karlins is great
                at helping this student when they most need it, it's important to know that even she has her limits. Karlins 2.0 will
                be available 24/7 to answer your questions. For questions, you can direct them to Joshuacoreymartinez@gmail.com. If you
                found a bug that you would like to report, feel free to submit a form using the google form on the sidebar. Click the
                black chat button in the bottom right to begin. Thank you! 
            </h4>
            <br></br>
        </div>
    </div>
  )
}
