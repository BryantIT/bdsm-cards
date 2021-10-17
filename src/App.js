import React, { useState } from 'react'
import QuickMenu from './components/quickmenu/QuickMenu'
import Main from './components/main/Main'
import Signup from './components/signup/Signup'
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState({})

  const userLogInCallback = (props) => {
    console.log(props)
  }
  return (
    <div className="container">
      <div className="main">
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/signup'>
            <Signup userLogInCallback={userLogInCallback}/>
          </Route>
        </Switch>
      </div>
      <div className="quick-nav">
        <QuickMenu />
      </div>
    </div>
  )
}

export default App
