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
  grid-template-columns: 60% auto;

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

  @media screen and (max-width: 450px) {
    & header {
      font-size: 1.6rem;
      justify-content: center;
    }
    .avatar-wrapper {
      display: block;
    }
  }
`

export const Post = styled.div`
  margin-top: 6.5rem;
  padding: 0 2rem 1.5rem;

  display: flex;
  flex-direction: row;
  gap: 2rem;

  border-bottom: 1px solid ${({ theme }) => theme.borders};

  .post-wrapper {
    flex: 1;
    input {
      width: 100%;
      background: transparent;
      border: none;

      font-size: 2rem;
      color: ${({ theme }) => theme.nick};
      padding: 1.2rem 0;

      &::placeholder {
        color: ${({ theme }) => theme.nick};
      }
    }
  }

  .options-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 2rem;
  }

  .input-options {
    list-style: none;

    li {
      display: inline-block;

      button {
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.main};
        border-radius: 50%;
        padding: 0.8rem;

        &:hover {
          background-color: ${({ theme }) => theme['background-input-options']};
        }
      }
    }
  }

  .btn {
    width: 10rem;
    height: 3.8rem;
  }
`

export const TrendsContainer = styled.div``
