import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
`

export const MenuContainer = styled.aside`
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  padding-left: 4rem;
  border-right: 1px solid ${({ theme }) => theme.borders};
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`

export const User = styled.div`
  padding-right: 2rem;
`

export const UserButton = styled.a`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);

  padding: 1rem;

  div.avatar-wrapper {
    margin: 0 auto;
  }

  div.user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 1.5rem;

    span.user-name {
      font-weight: bold;
      line-height: 24px;
    }

    span.nick {
      color: ${({ theme }) => theme.nick};
    }
  }

  span.dots {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    border-radius: 9999px;
    background-color: ${({ theme }) => theme['btn-menu-hover']};
  }
`

export const InitialPageContainer = styled.div``

export const HeaderContainer = styled.header``

export const TweetsContainer = styled.aside``
export const TrendsContainer = styled.div``
