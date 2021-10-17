import styled from 'styled-components'

export const Section = styled.section`
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
  min-height: 720px;
  display: table;
  position: relative;
`

export const Intro = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  -webkit-transform: translateY(-1.2rem);
  -ms-transform: translateY(-1.2rem);
  transform: translateY(-1.2rem);
  h1 {
    color: #FFFFFF;
  	font-family: "merriweather-bold", serif;
  	font-size: 5.4rem;
  	line-height: 1.334;
  	max-width: 800px;
  	margin-left: auto;
  	margin-right: auto;
  }

  h5 {
    color: rgba(255, 255, 255, 0.6);
  	font-family: "raleway-heavy", sans-serif;
  	font-size: 1.8rem;
  	line-height: 1.667;
  	margin-bottom: 0.6rem;
  	text-transform: uppercase;
  	letter-spacing: .25rem;
  }

  p {
    font-family: "merriweather-light", serif;
  	font-size: 1.8rem;
  	line-height: 1.8;
  	color: #c4c4c4;
  }
`
