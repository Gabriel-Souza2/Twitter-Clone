import { Menu } from '../../components/Menu'
import {
  HomeContainer,
  HeaderContainer,
  MenuContainer,
  InitialPageContainer,
  TweetsContainer,
  TrendsContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <MenuContainer>
        <Menu></Menu>
      </MenuContainer>
      <InitialPageContainer>
        <HeaderContainer></HeaderContainer>
        <TrendsContainer></TrendsContainer>
        <TweetsContainer></TweetsContainer>
      </InitialPageContainer>
    </HomeContainer>
  )
}
