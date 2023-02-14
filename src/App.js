import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Sidebar from './components/Sidebar.js'
import './App.css';
import Header from './components/Header'
import Feedback from './components/Feedback'
import Tutorial from './components/Tutorial'
import Warning from './components/Warning'
import Homepage from './pages/Homepage'
import Faq from './pages/Faq'
import About from './pages/About'




function App() {
  const [modal, showModal] = useState(false)

  const openTutorial = () => {
    showModal(true)
  }
  const closeTutorial = () => {
    showModal(false)
  }

  const [feedback, showFeedback] = useState(false)

  const openFeedback = () => {
    showFeedback(true)
  }
  const closeFeedback = () => {
    showFeedback(false)
  }

  const[warning, showWarning] = useState(true)

  const hideWarning = () => {
    showWarning(false)
  }
  return (
    <div className="App grid">
      

      <BrowserRouter>
        <div className='side'>
          <Sidebar openTutorial={openTutorial}/>
          {modal && <Tutorial closeTutorial={closeTutorial}/>}
          {feedback && <Feedback openFeedback={openFeedback}/>}
        </div>
        {warning && <Warning hideWarning={hideWarning}/> }
      <Switch>
        <Route exact path='/'>
          <Header title={'Welcome to Karlins 2.0'} />
          <div className='body'>
            <Homepage openTutorial={openTutorial}/>
          </div>
        </Route>
        <Route exact path='/faq'>
          <Header title={"Frequently Asked Questions"}/>
          <div className='body'>
            <Faq openTutorial={openTutorial}/>
          </div>
        </Route>
        <Route exact path='/about'>
          <Header title='What Is Karlins 2.0?' />
          <div className='body'>
            <About openTutorial={openTutorial}/>
          </div>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
