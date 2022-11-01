import styled from 'styled-components'

export const Container = styled.div`
  .twitter-icon {
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

    li {
      a {
        text-decoration: none;
        color: #fff;
        padding: 1rem;
        padding-right: 3rem;

        display: flex;
        align-items: center;
        width: fit-content;
        gap: 2rem;

        &:hover {
          border-radius: 9999px;
          background-color: ${({ theme }) => theme['btn-menu-hover']};
        }

        .menu-icon {
          width: 28px;
          height: 28px;
        }
      }
    }
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

    &:hover {
      background-color: ${({ theme }) => theme['main-dark']};
    }
  }
`
