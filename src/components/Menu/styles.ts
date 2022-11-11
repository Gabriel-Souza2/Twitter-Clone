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

  .btn {
    width: 100%;
    height: 5.2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 1rem;
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
  transition: all 0.15s linear;

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
