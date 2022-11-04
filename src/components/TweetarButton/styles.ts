import styled from 'styled-components'

export const BtnContainer = styled.div`
  width: 100%;
  height: 100%;
  .btn-tweetar {
    text-decoration: none;
    color: #fff;
    font-size: 1.8rem;
    font-weight: bold;

    background-color: ${({ theme }) => theme.main};

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 9999px;

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
    & {
      width: auto;
      .btn-tweetar {
        width: fit-content;
        height: fit-content;
        padding: 1.5rem;
        .btn-tweetar-icon {
          display: block;
        }
      }
      span {
        display: none;
      }
    }
  }
`
