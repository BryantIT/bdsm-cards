import React, { useState, useEffect } from 'react'
import {
  Container,
  Grid,
  Registration,
  Form,
  FormField,
  Submit,
  Close
} from './Styles.js'
import { FaRegWindowClose } from 'react-icons/fa'
import { useAuth } from '../../auth/UserAuth'
import { useHistory } from 'react-router-dom'

const UserForm = ({ origin, clearModal }) => {
  const history = useHistory()
  const { signup, currentUser, userInfo } = useAuth()
  const [isClicked, setIsClicked] = useState(false)
  const [nameValue, setNameValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [signupError, setSignupError] = useState('')
  const [formObj, setFormObj] = useState({
    email: '',
    password: ''
  })

  const handleMenuClick = () => {
    setIsClicked(!isClicked)
  }

  const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  useEffect(() => {
    const words = origin.split('-')
    const first = capitalizeFirstLetter(words[0])
    const second = capitalizeFirstLetter(words[1])
    const combined = `${first} ${second}`
    setNameValue(combined)
  }, [origin])

  const clearForm = () => {
    setFormObj({
      email: '',
      password: ''
    })
  }

  const handleChange = e => {
    const value = e.target.value;
    setFormObj({
      ...formObj,
      [e.target.name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (formObj && formObj.email && formObj.password) {
      createFirebaseUser()
      clearForm()
      clearModal()
      history.push('/profile')
    }
  }

  const createFirebaseUser = async () => {
    setIsLoading(true)
    const email = formObj.email
    const password = formObj.password
    try {
      setSignupError('')
      setIsLoading(true)
      await signup(email, password)
      .then(console.log('Setting User'))
    } catch(error){
      const message = error.message
      setSignupError(message)
    }
    setIsLoading(false)
  }

  return (
<Container>
  <Grid>
    <Close><FaRegWindowClose size={40} onClick={clearModal}/></Close>
    <Registration>
      <h2>{nameValue}</h2>
    <Form onSubmit={handleSubmit}>
        <FormField>
          <input
            value={formObj.email}
            type="email"
            placeholder="you@email.com"
            name="email"
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </FormField>
        <FormField>
          <input
            value={formObj.password}
            type="password"
            placeholder="••••••••••••"
            name='password'
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Submit clicked={isClicked} onClick={handleMenuClick}>
            <input type="submit" value={nameValue} />
          </Submit>
        </FormField>
      </Form>
    </Registration>
  </Grid>
</Container>

  )
}

export default UserForm
