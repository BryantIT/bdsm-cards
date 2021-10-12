import React, { Fragment } from 'react'
import Footer from './components/quickmenu/Footer'
import Main from './components/main/Main'
import Profile from './components/profile/Profile'
import TestFooter from './components/TestFooter'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="main">
        <Main />
      </div>
      <div className="quick-nav">
        <Footer />
      </div>
      <div className="profile">
        <Profile />
      </div>
    </div>
  )
}

export default App
