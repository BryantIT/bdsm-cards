import React from 'react'
import { useAuth } from '../../auth/UserAuth'
import CautionArea from './CautionArea'
import InfoLeft from './InfoLeft'
import InfoRight from './InfoRight'
import ProfileBadges from './ProfileBadges'
import ProfileStats from './ProfileStats'
import ProfileCard from './ProfileCard'
import {
  ProfileContainer,
  InfoLeftWrap,
  InfoRightWrap,
  ProfileCardWrap,
  ProfileBadgesWrap,
  ProfileStatsWrap,
  CautionAreaWrap
 } from './ProfileStyle'

const Profile = () => {
  const { currentUser, userInfo } = useAuth()
  console.log('currentUser', userInfo, currentUser)
  return (
    <ProfileContainer>
      <InfoLeftWrap>
        <InfoLeft />
      </InfoLeftWrap>
      <InfoRightWrap>
        <InfoRight />
      </InfoRightWrap>
      <ProfileCardWrap>
        <ProfileCard />
      </ProfileCardWrap>
      <ProfileBadgesWrap>
        <ProfileBadges />
      </ProfileBadgesWrap>
      <ProfileStatsWrap>
        <ProfileStats />
      </ProfileStatsWrap>
      <CautionAreaWrap>
        <CautionArea />
      </CautionAreaWrap>
    </ProfileContainer>

  )
}

export default Profile
