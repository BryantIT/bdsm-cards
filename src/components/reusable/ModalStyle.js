import styled from 'styled-components'

export const Section = styled.div`
  position: relative;
  width: 100%;
  display: block;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: center;
  justify-content: center;
`

export const ModalWrapper = styled.div`
  position: fixed;
  display: block;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  overflow-x: hidden;
  background-color: rgba(31,32,41,.75);
  pointer-events: none;
  opacity: 0;
  transition: opacity 250ms 700ms ease;
  pointer-events: auto;
  opacity: 1;
  transition: all 300ms ease-in-out;
`
