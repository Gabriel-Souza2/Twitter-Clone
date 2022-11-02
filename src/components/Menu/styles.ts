import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-right: 3rem;

  .icon-twitter {
    color: ${({ theme }) => theme.logo};
    cursor: pointer;
    display: block;
    width: 5.5rem;
    height: 5.5rem;
    padding: 1rem;

    &:hover {
      border-radius: 50%;
      background-color: ${({ theme }) => theme['logo-hover']};
    }
  }

  ul {
    list-style: none;
    font-size: 2rem;

    margin-top: 0.5rem;
  }

  .btn-tweetar {
    text-decoration: none;
    color: #fff;
    font-size: 1.8rem;
    font-weight: bold;

    background-color: ${({ theme }) => theme.main};

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1.5rem;
    border-radius: 9999px;

    margin-top: 1rem;

    .btn-tweetar-icon {
      display: none;
      width: 24px;
      height: 24px;
    }

    &:hover {
      background-color: ${({ theme }) => theme['main-dark']};
    }
  }

  @media screen and (max-width: 1024px) {
    &,
    & ul li {
      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;
    }

    & {
      margin-right: 0;
    }

    .btn-tweetar {
      padding: 1.2rem;
      .btn-tweetar-icon {
        display: block;
      }

      span {
        display: none;
      }
    }
  }
`

interface MenuButtonProps {
  active: boolean
}

export const MenuButton = styled.a<MenuButtonProps>`
  padding: 1rem;

  display: flex;
  align-items: center;
  width: fit-content;
  gap: 2rem;

  ${({ active }) =>
    active &&
    css`
      font-weight: bold;
    `};

  &:hover {
    border-radius: 9999px;
    background-color: ${({ theme }) => theme['btn-menu-hover']};
  }

  .icon-menu {
    width: 28px;
    height: 28px;
  }

  @media screen and (max-width: 1024px) {
    & span {
      display: none;
    }
  }
`
