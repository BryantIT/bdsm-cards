import styled from 'styled-components'

// Profile Main
export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 0.5fr 0.5fr 0.5fr;
  gap: 0px 0px;
  grid-template-areas:
    "info-left profile-card profile-card info-right"
    "info-left profile-card profile-card info-right"
    "profile-badges profile-badges profile-badges profile-badges"
    "profile-stats profile-stats profile-stats profile-stats"
    "caution-area caution-area caution-area caution-area";
`

export const InfoLeftWrap = styled.div`
  grid-area: info-left;
`
export const InfoRightWrap = styled.div`
  grid-area: info-right;
`
export const ProfileCardWrap = styled.div`
  grid-area: profile-card;
  padding-top: 2vh;
`
export const ProfileBadgesWrap = styled.div`
  grid-area: profile-badges;
`
export const ProfileStatsWrap = styled.div`
  grid-area: profile-stats;
`
export const CautionAreaWrap = styled.div`
  grid-area: caution-area;
`

// Profile Left
export const InfoLeftContainer = styled.div`
  color: white;
`

// Profile Card
export const CardContainer = styled.div`
  background-color: #002a33;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
  color: #B3B8CD;
  position: relative;
  border: 5px solid black;
  height: 100%;
  width: 100%;
  text-align: center;
  h3 {
  	margin: 10px 0;
  }
  h6 {
  	margin: 5px 0;
  	text-transform: uppercase;
  }
  p {
  	font-size: 14px;
  	line-height: 21px;
  }
  img {
  	border: 1px solid #03BFCB;
  	border-radius: 50%;
  	padding: 7px;
  }
`

export const Editable = styled.div`
  img {
    cursor: pointer;
  }
`

export const ProWrap = styled.span`
  color: #231E39;
  background-color: #FEBB0B;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  padding: 3px 7px;
  position: absolute;
  top: 30px;
  left: 30px;
`

export const Skills = styled.div`
  background-color: #002a33;
  text-align: left;
  padding: 15px;
  margin-top: 30px;
  ul {
  	list-style-type: none;
  	margin: 0;
  	padding: 0;
  }
  ul li {
  	border: 1px solid #03BFCB;
  	border-radius: 2px;
  	display: inline-block;
  	font-size: 12px;
  	margin: 0 7px 7px 0;
  	padding: 7px;
  }
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
  }
`
