import React, { useState, useEffect } from 'react'
import {
  Container,
  Grid,
  Registration,
  Form,
  FormField,
  Submit,
  Close,
  ValidationContainer
} from './Styles.js'
import {
  FaRegWindowClose,
  FaCheck
 } from 'react-icons/fa'
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
    password: '',
    passwordConfirmation: ''
  })
  const [isSignup, setIsSignup] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [sixCharacters, setSixCharacters] = useState(false)
  const [oneSpecial, setOneSpecial] = useState(false)
  const [oneNumber, setOneNumber] = useState(false)
  const [oneUpper, setOneUpper] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState(false)

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
    if (origin === 'sign-up') {
      setIsSignup(true)
    }
  }, [origin])

  const clearForm = () => {
    setFormObj({
      email: '',
      password: ''
    })
  }

  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name
    if (name === 'email') {
      const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
      setValidEmail(emailCheck)
    }
    if (name === 'password') {
      const capitalCheck = /^(?=.*[A-Z])/.test(value)
      const digitCheck = /^(?=.*\d)/.test(value)
      const specialCheck = /^(?=.*[-+_!@#$%^&*.,?])/.test(value)

      setOneNumber(digitCheck)
      setOneUpper(capitalCheck)
      setOneSpecial(specialCheck)
      console.log('VALUE', value.length)
      if (value.length >= 6) {
        setSixCharacters(true)
      } else {
        setSixCharacters(false)
      }
    }
    if (name === 'passwordConfirmation') {
      if (value === formObj.password) {
        setPasswordMatch(true)
      } else {
        setPasswordMatch(false)
      }
    }
    setFormObj({
      ...formObj,
      [name]: value
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
        {
          isSignup ?
          <ValidationContainer>
            <li><FaCheck color={validEmail ? 'green' : 'red'}/> Must be valid email</li>
        </ValidationContainer> : null
        }
        <FormField>
          <input
            value={formObj.password}
            type="password"
            placeholder="password"
            name='password'
            onChange={handleChange}
            required
          />
        </FormField>
        {
          isSignup ?
          <ValidationContainer>
            <li><FaCheck color={sixCharacters ? 'green' : 'red'}/> Must contain at least 6 characters</li>
          <li><FaCheck color={oneSpecial ? 'green' : 'red'}/> Must contain at least one special character</li>
          <li><FaCheck color={oneNumber ? 'green' : 'red'}/> Must contain at least one number</li>
        <li><FaCheck color={oneUpper ? 'green' : 'red'}/> Must contain at least one uppercase letter</li>
        </ValidationContainer> : null
        }
        {
          isSignup ?
          <FormField>
            <input
              value={formObj.passwordConfirmation}
              type="password"
              placeholder="confirm password"
              name='passwordConfirmation'
              onChange={handleChange}
              required
            />
        </FormField> : null
        }
        {
          isSignup ?
          <ValidationContainer>
            <li><FaCheck color={passwordMatch ? 'green' : 'red'}/> Passwords must match</li>
        </ValidationContainer> : null
        }
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
