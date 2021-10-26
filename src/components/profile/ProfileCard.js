import React from 'react'
import {
  CardContainer,
  ProWrap,
  Skills,
  ButtonWrapper
 } from './ProfileStyle'

const CautionArea = () => {
  return (
      <CardContainer>
         <ProWrap>PRO</ProWrap>
         <img src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
         <h3>Ricky Park</h3>
         <h6>New York</h6>
         <p>User interface designer and <br/> front-end developer</p>
       <ButtonWrapper>
      <button>
        Message
      </button>
      <button>
        Following
      </button>
    </ButtonWrapper>
    <Skills>
      <h6>Skills</h6>
      <ul>
        <li>UI / UX</li>
        <li>Front End Development</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
      </ul>
    </Skills>
  </CardContainer>
  )
}
export default CautionArea
