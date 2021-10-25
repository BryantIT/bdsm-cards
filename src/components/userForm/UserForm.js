import React, { useState, useEffect } from 'react'
import {
  Container,
  Grid,
  Registration,
  Form,
  FormField,
  Submit,
  Close,
  ValidationContainer,
} from './Styles.js'
import {
  FaRegWindowClose,
  FaCheck
 } from 'react-icons/fa'
import { useAuth } from '../../auth/UserAuth'
import { db } from '../../firebase'
import { useHistory } from 'react-router-dom'
import { DateTime, Interval } from "luxon"

const UserForm = ({ origin, clearModal }) => {
  const history = useHistory()
  const { signup, signin } = useAuth()
  const [isClicked, setIsClicked] = useState(false)
  const [nameValue, setNameValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [signupError, setSignupError] = useState('')
  const [formObj, setFormObj] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    tos: false,
    over18: false,
    over18Checked: false,
    birthdate: ''
  })
  const [isSignup, setIsSignup] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [sixCharacters, setSixCharacters] = useState(false)
  const [oneSpecial, setOneSpecial] = useState(false)
  const [oneNumber, setOneNumber] = useState(false)
  const [oneUpper, setOneUpper] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState(false)
  const [over18, setOver18] = useState(false)
  const [uid, setUid] = useState(null)

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
    const value = e.target.value
    const name = e.target.name
    if (e.target.type === 'checkbox'  && e.target.checked) {
      setFormObj({
        ...formObj,
        tos: true
      })
    } else {
      setFormObj({
        ...formObj,
        tos: false
      })
    }
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
    if (e.target.type !== 'checkbox') {
      setFormObj({
        ...formObj,
        [name]: value
      })
    }
  }

  const handleChangeOver18 = e => {
    const name = e.target.name
    const value = e.target.value
    const checked = e.target.checked
    if (name === 'birthdate') {
      const split = value.split('-')
      const year = parseInt(split[0])
      const month = parseInt(split[1])
      const day = parseInt(split[2])
      const converted = DateTime.local(year, month, day);
      const now = DateTime.local()
      const from = Interval.fromDateTimes(converted, now)
      const diff = from.count()
      const checkYears = Math.floor(diff / 31536000000)
      if (checkYears > 18) {
        setOver18(true)
        setFormObj({
          ...formObj,
          over18: true,
          birthdate: converted.ts
        })
      } else {
        setOver18(false)
        setFormObj({
          ...formObj,
          over18: false,
          birthdate: converted.ts
        })
      }
    }
    if (e.target.type === 'checkbox') {
      console.log('checked', name, checked)
      setFormObj({
        ...formObj,
        [name]: checked,
      })
    }
  }

  console.log('FORM', formObj)

  const handleSubmit = e => {
    e.preventDefault()
    if (formObj
      && formObj.email
      && formObj.password
      && validEmail
      && sixCharacters
      && oneSpecial
      && oneNumber
      && oneUpper
      && passwordMatch
      && formObj.over18Checked
      && over18) {
      createFirebaseUser()
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
      .then(res => {
        if (res) {
          db.collection('users').doc(`${res.user.uid}`).set({
              createdOn: DateTime.local().ts,
              updatedOn: DateTime.local().ts,
              email: formObj.email,
              tos: formObj.tos,
              over18: formObj.over18,
              over18Checked: formObj.over18Checked,
              birthdate: formObj.birthdate
            })
            signin(email, password)
            clearForm()
            clearModal()
            history.push('/profile')
        }
      })
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
        {
          isSignup ?
          <FormField>
            <input
              value={formObj.tos}
              type="checkbox"
              name='tos'
              onChange={handleChange}
              required
            />
           I agree to the TOS
        </FormField> : null
        }
        {
          isSignup ?
          <FormField>
            <input
              value={formObj.over18Checked}
              type="checkbox"
              name='over18Checked'
              onChange={handleChangeOver18}
              required
            />
          I am over the age of 18 (check and enter birthdate below)
        </FormField> : null
        }
          {
            isSignup ?
            <FormField>
              <input
                // value={formObj.birthdate}
                type="date"
                name="birthdate"
                onChange={handleChangeOver18}
                required
              />
          </FormField> : null
          }
        {
          isSignup ?
          <ValidationContainer>
            <li><FaCheck color={over18 ? 'green' : 'red'}/> Must be over 18</li>
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
