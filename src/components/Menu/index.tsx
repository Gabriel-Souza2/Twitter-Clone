import {
  Bell,
  DotsThreeCircle,
  EnvelopeSimple,
  Hash,
  HouseLine,
  TwitterLogo,
  User,
} from 'phosphor-react'
import { Container } from './styles'

export function Menu() {
  return (
    <Container>
      <TwitterLogo className="twitter-icon" weight="fill" />

      <ul>
        <li>
          <a href="">
            <HouseLine className="menu-icon" weight="fill" />
            Pagina Inicial
          </a>
        </li>
        <li>
          <a href="">
            <Hash className="menu-icon" weight="fill" />
            Explorar
          </a>
        </li>
        <li>
          <a href="">
            <Bell className="menu-icon" weight="regular" />
            Notificações
          </a>
        </li>
        <li>
          <a href="">
            <EnvelopeSimple className="menu-icon" weight="regular" />
            Mensagens
          </a>
        </li>
        <li>
          <a href="">
            <User className="menu-icon" weight="regular" />
            Perfil
          </a>
        </li>
        <li>
          <a href="">
            <DotsThreeCircle className="menu-icon" weight="regular" />
            Mais
          </a>
        </li>
      </ul>

      <a href="" className="btn-tweetar ">
        Twetar
      </a>
    </Container>
  )
}
