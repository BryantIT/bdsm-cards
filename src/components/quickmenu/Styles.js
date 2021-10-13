import styled from 'styled-components'

export const GroupContainer = styled.div`
  height: 100px;
  display: grid;
  place-items: center;
  grid-row-start: 2;
  grid-row-end: 3;
`

export const ButtonWrapper = styled.div`
  button {
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
