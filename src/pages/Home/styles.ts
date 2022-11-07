import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
`

export const MenuContainer = styled.aside`
  padding: 0.5rem 1.5rem;
  border-right: 1px solid ${({ theme }) => theme.borders};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 450px) {
    & {
      display: none;
    }
  }
`

export const User = styled.div``

export const UserButton = styled.a`
  width: 100%;
  padding: 1rem 0;

  display: flex;
  justify-content: space-between;

  span.dots {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
  }

  &:hover {
    border-radius: 9999px;
    background-color: ${({ theme }) => theme['btn-menu-hover']};
  }

  @media screen and (max-width: 1024px) {
    span.dots {
      display: none;
    }
  }
`

export const InitialPageContainer = styled.div`
  display: grid;
  grid-template-columns: 65% auto;

  @media screen and (max-width: 768px) {
    max-width: 59rem;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    width: 100vw;
  }
`

export const TweetsContainer = styled.div`
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.borders};

  header {
    height: 5.3rem;
    font-size: 2rem;
    font-weight: bold;
    position: fixed;

    display: flex;
    align-items: center;

    padding: 0 1.6rem;

    background-color: rgba(0, 0, 0, 0.4);
  }

  .avatar-menu-button {
    background: transparent;
    border: none;
  }

  .avatar-wrapper {
    margin-right: 2rem;
    display: none;
  }

  .tweets-painel-wrapper {
    margin-top: 6.5rem;
    padding: 0 2rem 1.5rem;

    border-bottom: 1px solid ${({ theme }) => theme.borders};
  }

  .btn-float-tweetar {
    display: none;
    position: fixed;
    bottom: 80px;
    right: 30px;
    width: 4.8rem;
    height: 4.8rem;
  }

  @media screen and (max-width: 450px) {
    & header {
      font-size: 1.6rem;
      justify-content: center;
    }

    .avatar-wrapper {
      display: block;
    }

    .tweets-painel-wrapper {
      display: none;
    }

    .btn-float-tweetar {
      display: block;
    }
  }
`

export const TrendsContainer = styled.div``

export const MenuMobileContainer = styled.div`
  width: 100%;
  height: 5.6rem;
  position: fixed;
  bottom: 0;
  left: 0;
  display: none;

  @media screen and (max-width: 450px) {
    display: block;
  }
`
