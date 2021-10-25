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
