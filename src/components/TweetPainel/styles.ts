import styled from 'styled-components'

export const TweetPainelContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  .post-wrapper {
    flex: 1;
    textarea {
      width: 100%;
      height: auto;
      background: transparent;
      border: none;
      resize: none;
      overflow: hidden;

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

  @media screen and (max-width: 690px) {
    .input-options > li:nth-last-child(-n + 2) {
      display: none;
    }
  }
`
