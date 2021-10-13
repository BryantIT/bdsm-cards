import React, { Fragment } from 'react'
import QuickMenu from './components/quickmenu/QuickMenu'
import Main from './components/main/Main'
import Profile from './components/profile/Profile'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="main">
        <Main />
      </div>
      <div className="quick-nav">
        <QuickMenu />
      </div>
      <div className="profile">
        <Profile />
      </div>
    </div>
  )
}

export default App
