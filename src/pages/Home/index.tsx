import { DotsThree } from 'phosphor-react'
import { Menu } from '../../components/Menu'
import { UserInfo } from '../../components/UserInfo'
import {
  HomeContainer,
  HeaderContainer,
  MenuContainer,
  User,
  UserButton,
  InitialPageContainer,
  TweetsContainer,
  TrendsContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <MenuContainer>
        <Menu></Menu>
        <User>
          <UserButton>
            <UserInfo />
            <span className="dots">
              <DotsThree size={25} weight="bold" />
            </span>
          </UserButton>
        </User>
      </MenuContainer>
      <InitialPageContainer>
        <HeaderContainer></HeaderContainer>
        <TrendsContainer></TrendsContainer>
        <TweetsContainer></TweetsContainer>
      </InitialPageContainer>
    </HomeContainer>
  )
}
