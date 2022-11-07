import styled from 'styled-components'

export const MenuMobileContainer = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid ${({ theme }) => theme.borders};
  padding: 0 4rem;

  ul {
    height: 100%;

    list-style: none;
    display: flex;

    align-items: center;
    justify-content: space-between;
    font-size: 2.8rem;

    li a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.8rem;

      &:hover,
      &:active {
        background-color: ${({ theme }) => theme['btn-menu-hover']};
        border-radius: 100%;
      }
    }
  }
`
