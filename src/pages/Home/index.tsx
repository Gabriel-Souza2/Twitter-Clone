import { DotsThree } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import { Avatar } from '../../components/Avatar'
import { Menu } from '../../components/Menu'
import { UserInfo } from '../../components/UserInfo'
import {
  HomeContainer,
  MenuContainer,
  User,
  UserButton,
  InitialPageContainer,
  TweetsContainer,
  TrendsContainer,
} from './styles'
import { MenuMobile } from '../../components/MenuMobile'

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
        <TweetsContainer>
          <header>
            <div className="avatar-wrapper">
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button className="avatar-menu-button">
                    <Avatar
                      size={32}
                      uri="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    />
                  </button>
                </Dialog.Trigger>
                <MenuMobile />
              </Dialog.Root>
            </div>
            Página Incial
          </header>
        </TweetsContainer>
        <TrendsContainer></TrendsContainer>
      </InitialPageContainer>
    </HomeContainer>
  )
}
