import styled from 'styled-components'

interface AvatarProps {
  size: number
}

export const AvatarContainer = styled.div<AvatarProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  img {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: 99999px;
  }
`
