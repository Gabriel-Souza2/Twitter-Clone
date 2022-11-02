import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
`

export const MenuContainer = styled.aside`
  padding: 1rem 1.5rem;
  border-right: 1px solid ${({ theme }) => theme.borders};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const User = styled.div``

export const UserButton = styled.a`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);

  padding: 1rem 0;

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

  @media screen and (max-width: 1024px) {
    & {
      grid-template-columns: 1fr;
    }
    div.user-info,
    span.dots {
      display: none;
    }
  }
`

export const InitialPageContainer = styled.div``

export const HeaderContainer = styled.header``

export const TweetsContainer = styled.aside``
export const TrendsContainer = styled.div``
