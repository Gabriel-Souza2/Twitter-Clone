import styled from 'styled-components'

interface TweetarButtonProps {
  fontSize: number
}

const BaseButton = styled.div<TweetarButtonProps>`
  width: 100%;
  height: 100%;
  .btn-tweetar {
    color: #fff;
    font-size: ${({ fontSize }) => fontSize}rem;
    font-weight: bold;
    border: none;

    background-color: ${({ theme }) => theme.main};

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 9999px;
    cursor: pointer;

    .btn-tweetar-icon {
      display: none;
      width: 24px;
      height: 24px;
    }

    &:hover:enabled {
      background-color: ${({ theme }) => theme['main-dark']};
    }

    :disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`

export const TweetarButtonContainer = styled(BaseButton)``

export const TweetarButtonAdaptativeContainer = styled(BaseButton)`
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
