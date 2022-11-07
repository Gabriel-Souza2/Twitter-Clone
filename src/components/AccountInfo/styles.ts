import styled, { keyframes } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const AccountInfoContainer = styled(Dialog.Portal)``

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(91, 112, 131, 0.4);
  inset: 0;
`

const slidein = keyframes`
  0% {
    margin-left: -50%;
  }

  100% {
    margin-left: 0;
  }
`

export const Content = styled(Dialog.Content)`
  width: 70%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  animation: ${slidein} 0.4s linear;

  header {
    display: flex;
    align-items: center;

    justify-content: space-between;
    padding: 1.5rem;
  }
`

export const Title = styled(Dialog.Title)`
  font-size: 1.8rem;
`

export const CloseButton = styled(Dialog.Close)`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
`

export const Main = styled.div`
  margin-top: 2rem;
  height: 100vh;
  overflow-y: scroll;

  .account-info {
    padding: 0 1.5rem;
  }
  .avatar-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user {
    margin-top: 1rem;

    span {
      display: block;
    }

    .user-name {
      font-size: 1.8rem;
      font-weight: bold;
    }

    .user-nick {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.nick};
    }
  }

  .follows-container {
    margin-top: 1.5rem;
    font-size: 1.4rem;
    display: flex;

    gap: 2rem;

    span {
      color: ${({ theme }) => theme.nick};

      .follows-number {
        color: ${({ theme }) => theme.text};
        font-weight: bold;
        margin-right: 0.5rem;
      }
    }
  }
`
export const MenuList = styled.ul`
  margin-top: 2rem;
  list-style: none;
  font-size: 2rem;
  font-weight: bold;

  li {
    a {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 1.5rem;

      &:hover {
        background-color: ${({ theme }) => theme['btn-menu-hover']};
      }
    }
  }
`

export const Options = styled.div`
  .border {
    padding: 0 1.5rem;

    hr {
      border: 1px solid ${({ theme }) => theme.borders};
    }
  }

  .options-wrapper {
    width: 100%;

    list-style: none;
    font-size: 1.4rem;
    font-weight: bold;
    margin-top: 0.3rem;

    li a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2rem;

      &:hover {
        background-color: ${({ theme }) => theme['btn-menu-hover']};
      }
    }
  }
`
