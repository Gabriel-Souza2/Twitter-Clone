import styled from 'styled-components'

export const TweetContainer = styled.div`
  padding: 1rem 2rem;

  .buttons-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn-back {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.text};
    }

    .btn-tweet-wrapper {
      width: 8.6rem;
      height: 3.2rem;
    }
  }

  .tweet-wrapper {
    margin-top: 2rem;
    display: flex;

    gap: 2rem;

    .options-wrapper {
      margin-top: 3rem;
      border-top: 1px solid ${({ theme }) => theme.borders};
    }
  }
`
