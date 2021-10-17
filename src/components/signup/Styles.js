import styled from 'styled-components'

export const Submit = styled.div`
  input {
    background: transparent;
    min-width: 100px;
    text-transform: uppercase;
    border-radius: 8px;
    font-size: 15px;
    padding: 10px 16px;
    margin: 0 3px 0 0;
    cursor: pointer;
    border: 3px solid #00d4ff;
    color: #00d4ff;
    background-color: #002a33;
    &:hover {
      border-color: #33ddff;
      color: #33ddff;
      background-color: #005566;
    }
    &:focus {
      border-color: #33ddff;
      color: #33ddff;
      background-color: ${props => props.clicked ? '#005566' : '#002a33'};
      padding: ${props => props.clicked ? '16px 16px' : ''};
      outline: 0;
      border-radius: 12px;
    }
    &:focus:first-of-type {
      border-radius: 30px 12px 12px 30px;
    }
    &:focus:last-of-type {
      border-radius: 12px 30px 30px 12px;
    }
  }
`

export const Container = styled.div`
  padding-top: 5%;
  align-items: center;
  display: flex;
  flex-direction: row;
  input {
    border: 0;
    font: inherit;
  }
  h2 {
    color: #FFFFFF;
    font-family: "merriweather-bold", serif;
    font-size: 2.75rem;
    font-weight: 100;
    margin: 0 0 1rem;
    text-transform: uppercase;
  }
  a {
    color: #7e8ba3;
  }
  p {
    font-family: "merriweather-light", serif;
    color: #c4c4c4;
  }
`

export const Grid = styled.div`
  margin: 0 auto;
  max-width: 25rem;
  width: 100%;
`

export const Registration = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  input[type=email], input[type=password] {
    border: 1px solid #242c37;
    border-radius: 999px;
    background-color: transparent;
    text-align: center;
    background-repeat: no-repeat;
    background-size: 1.5rem;
    background-position: 1rem 50%;
  }
`

export const Form = styled.form`
  input[type=email], input[type=password] {
    outline: 0;
    padding: 0.5rem 1rem 1rem;
    width: 100%;
`

export const FormField = styled.div`
  margin-bottom: 1rem;
  padding-right: 10%;
`
