import styled from 'styled-components'

interface AvatarProps {
  size: number
}

export const AvatarContainer = styled.div<AvatarProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 99999px;
  }
`
