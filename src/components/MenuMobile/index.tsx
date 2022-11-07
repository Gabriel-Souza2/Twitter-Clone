import {
  Bell,
  EnvelopeSimple,
  HouseLine,
  MagnifyingGlass,
} from 'phosphor-react'
import { MenuMobileContainer } from './styles'

export function MenuMobile() {
  return (
    <MenuMobileContainer>
      <ul>
        <li>
          <a href="">
            <HouseLine className="icon-menu" weight="fill" />
          </a>
        </li>
        <li>
          <a href="">
            <MagnifyingGlass className="icon-menu" weight="regular" />
          </a>
        </li>
        <li>
          <a href="">
            <Bell className="icon-menu" weight="regular" />
          </a>
        </li>
        <li>
          <a href="">
            <EnvelopeSimple className="icon-menu" weight="regular" />
          </a>
        </li>
      </ul>
    </MenuMobileContainer>
  )
}
