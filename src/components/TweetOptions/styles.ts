import styled from 'styled-components'

export const TweetOptionsContainer = styled.div`
  ul {
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
          background-color: ${({ theme }) => theme['background-tweet-options']};
        }
      }
    }
  }

  @media screen and (max-width: 690px) {
    ul > li:nth-last-child(-n + 2) {
      display: none;
    }
  }
`
