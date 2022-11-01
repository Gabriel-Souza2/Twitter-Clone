import { DotsThree } from 'phosphor-react'
import { Avatar } from '../../components/Avatar'
import { Menu } from '../../components/Menu'
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
            <div className="avatar-wrapper">
              <Avatar uri="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            </div>
            <div className="user-info">
              <span className="user-name">User Name</span>
              <span className="nick">@username</span>
            </div>
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
