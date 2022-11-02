import {
  Bell,
  DotsThreeCircle,
  EnvelopeSimple,
  Hash,
  HouseLine,
  PencilLine,
  TwitterLogo,
  User,
} from 'phosphor-react'
import { Container } from './styles'

export function Menu() {
  return (
    <Container>
      <TwitterLogo className="icon-twitter" weight="fill" />

      <ul>
        <li>
          <a href="">
            <HouseLine className="icon-menu" weight="fill" />
            <span>Pagina Inicial</span>
          </a>
        </li>
        <li>
          <a href="">
            <Hash className="icon-menu" weight="fill" />
            <span>Explorar</span>
          </a>
        </li>
        <li>
          <a href="">
            <Bell className="icon-menu" weight="regular" />
            <span>Notificações</span>
          </a>
        </li>
        <li>
          <a href="">
            <EnvelopeSimple className="icon-menu" weight="regular" />
            <span>Mensagens</span>
          </a>
        </li>
        <li>
          <a href="">
            <User className="icon-menu" weight="regular" />
            <span>Perfil</span>
          </a>
        </li>
        <li>
          <a href="">
            <DotsThreeCircle className="icon-menu" weight="regular" />
            <span>Mais</span>
          </a>
        </li>
      </ul>

      <a href="" className="btn-tweetar ">
        <PencilLine className="btn-tweetar-icon" weight="regular" />
        <span>Tweetar</span>
      </a>
    </Container>
  )
}
