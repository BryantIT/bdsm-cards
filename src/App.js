import React, { useState } from 'react'
import QuickMenu from './components/quickmenu/QuickMenu'
import Main from './components/main/Main'
import Modal from './components/reusable/Modal'
import Profile from './components/profile/Profile'
import {
  Switch,
  Route
} from "react-router-dom";
import { useAuth } from './auth/UserAuth'
import './App.css';

function App() {
  const { currentUser, userInfo } = useAuth()
  const [showModal, setShowModal] = useState(false)
  const [origin, setOrigin] = useState('')

  const signupCallback = (origin, state) => {
    setShowModal(state)
    setOrigin(origin)
  }
  const clearModal = () => {
    setShowModal(false)
  }
  return (
    <div className="container">
      <div className="main">
        <Switch>
          <Route exact path='/'>
            {
              !showModal ?
              <Main /> : null
            }
          </Route>
          <Route exact path='/profile'>
            {
              !showModal ?
              <Profile /> : null
            }
          </Route>
        </Switch>
        {
          showModal ?
          <Modal
            origin={origin}
            showModal={showModal}
            clearModal={clearModal}
          /> : null
        }
      </div>
      <div className="quick-nav">
        {
          !showModal ?
          <QuickMenu currentUser={currentUser} signupCallback={signupCallback}/> : null
        }
      </div>
    </div>
  )
}

export default App
