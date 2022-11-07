import styled from 'styled-components'

export const TweetOptionsContainer = styled.div`
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

  @media screen and (max-width: 690px) {
    .input-options > li:nth-last-child(-n + 2) {
      display: none;
    }
  }
`
