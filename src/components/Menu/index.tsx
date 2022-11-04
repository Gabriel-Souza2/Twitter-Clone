import {
  Bell,
  DotsThreeCircle,
  EnvelopeSimple,
  Hash,
  HouseLine,
  TwitterLogo,
  User,
} from 'phosphor-react'
import { TweetarButton } from '../TweetarButton'
import { Container, MenuButton } from './styles'

export function Menu() {
  return (
    <Container>
      <TwitterLogo className="icon-twitter" weight="fill" />

      <ul>
        <li>
          <MenuButton href="" active={true}>
            <HouseLine className="icon-menu" weight="fill" />
            <span>Pagina Inicial</span>
          </MenuButton>
        </li>
        <li>
          <MenuButton href="" active={false}>
            <Hash className="icon-menu" weight="regular" />
            <span>Explorar</span>
          </MenuButton>
        </li>
        <li>
          <MenuButton href="" active={false}>
            <Bell className="icon-menu" weight="regular" />
            <span>Notificações</span>
          </MenuButton>
        </li>
        <li>
          <MenuButton href="" active={false}>
            <EnvelopeSimple className="icon-menu" weight="regular" />
            <span>Mensagens</span>
          </MenuButton>
        </li>
        <li>
          <MenuButton href="" active={false}>
            <User className="icon-menu" weight="regular" />
            <span>Perfil</span>
          </MenuButton>
        </li>
        <li>
          <MenuButton href="" active={false}>
            <DotsThreeCircle className="icon-menu" weight="regular" />
            <span>Mais</span>
          </MenuButton>
        </li>
      </ul>

      <div className="btn">
        <TweetarButton />
      </div>
    </Container>
  )
}
