import { AvatarContainer } from './styles'

interface Props {
  uri: string
  size?: number
}

export function Avatar({ uri, size = 40 }: Props) {
  return (
    <AvatarContainer size={size}>
      <img src={uri} />
    </AvatarContainer>
  )
}
