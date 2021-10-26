import React, { useCallback } from 'react'
import {
  CardContainer,
  ProWrap,
  Skills,
  ButtonWrapper,
  Editable
 } from './ProfileStyle'
 import {useDropzone} from 'react-dropzone'

const ProfileCard = () => {
    const onDrop = useCallback(acceptedFiles => {
      console.log('acceptedFiles', acceptedFiles)
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
      <CardContainer>
         <ProWrap>PRO</ProWrap>
       <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <Editable>
              <img src="/profile.png" alt="user" />
            </Editable>
        }
      </div>
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
export default ProfileCard
