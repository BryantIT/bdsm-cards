import React, { useState } from 'react'
import {
  Container,
  Grid,
  Registration,
  Form,
  FormField,
  Submit
} from './Styles.js'

const Signup = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleMenuClick = () => {
    setIsClicked(!isClicked)
  }
  return (
<Container>
  <Grid>
    <Registration>
      <h2>Sign Up</h2>
    <Form>
        <FormField>
          <input type="email" placeholder="you@email.com" />
        </FormField>
        <FormField>
          <input type="password" placeholder="••••••••••••" />
        </FormField>
        <FormField>
          <Submit clicked={isClicked} onClick={handleMenuClick}>
            <input type="submit" value="Sign Up" />
          </Submit>
        </FormField>
      </Form>
      <p>Already have an accout? <a href="#">Log in</a></p>
    </Registration>
  </Grid>
</Container>

  )
}

export default Signup
