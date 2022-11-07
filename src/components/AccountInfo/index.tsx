import {
  BookmarkSimple,
  CaretDown,
  ChatTeardropText,
  PlusCircle,
  User,
  X,
  Article,
  UserPlus,
} from 'phosphor-react'
import { Avatar } from '../Avatar'
import {
  MenuMobileContainer,
  Overlay,
  Content,
  CloseButton,
  Title,
  Main,
  MenuList,
  Options,
} from './styles'

export function AccountInfo() {
  return (
    <MenuMobileContainer>
      <Content>
        <header>
          <Title>Informações da Conta</Title>
          <CloseButton>
            <X size={20} weight="bold" />
          </CloseButton>
        </header>
        <Main>
          <div className="account-info">
            <div className="avatar-wrapper">
              <Avatar
                size={40}
                uri="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=8"
              />
              <PlusCircle size={35} />
            </div>
            <div className="user">
              <span className="user-name">User name</span>
              <span className="user-nick">@UserNick</span>
            </div>

            <div className="follows-container">
              <span>
                <span className="follows-number">0</span>
                Seguindo
              </span>
              <span>
                <span className="follows-number">0</span>
                Seguidor
              </span>
            </div>
          </div>
          <MenuList>
            <li>
              <a href="">
                <User className="icon-menu" weight="bold" />
                <span>Perfil</span>
              </a>
            </li>
            <li>
              <a href="">
                <ChatTeardropText className="icon-menu" weight="bold" />
                <span>Topicos</span>
              </a>
            </li>
            <li>
              <a href="">
                <BookmarkSimple className="icon-menu" weight="bold" />
                <span>Items Salvos</span>
              </a>
            </li>
            <li>
              <a href="">
                <Article className="icon-menu" weight="bold" />
                <span>Listas</span>
              </a>
            </li>
            <li>
              <a href="">
                <UserPlus className="icon-menu" weight="bold" />
                <span>Roda do Twitter</span>
              </a>
            </li>
          </MenuList>
          <Options>
            <div className="border">
              <hr />
            </div>
            <ul className="options-wrapper">
              <li>
                <a href="">
                  Create Studio
                  <CaretDown size={20} />
                </a>
              </li>
              <li>
                <a href="">
                  Ferramentas Profissionais
                  <CaretDown size={20} />
                </a>
              </li>
              <li>
                <a href="">
                  Configurações e suporte
                  <CaretDown size={20} />
                </a>
              </li>
            </ul>
          </Options>
        </Main>
      </Content>
      <Overlay />
    </MenuMobileContainer>
  )
}
