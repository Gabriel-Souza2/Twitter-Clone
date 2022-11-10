import styled from 'styled-components'
import { defaultTheme } from '../../styles/default/theme'

export const TweetContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.borders};

  .header-tweet {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.3rem;

    .info-wrapper {
      display: flex;
      align-items: center;
      span,
      a {
        margin-right: 0.5rem;
        font-size: 1.5rem;
      }

      a:hover {
        text-decoration: underline;
      }

      .name {
        color: ${({ theme }) => theme.text};
        font-weight: bold;
      }

      .nick,
      .time,
      .dot {
        color: ${({ theme }) => theme.nick};
      }

      .dot {
        height: 2px;
        width: 2px;
        background-color: ${({ theme }) => theme.nick};
        border-radius: 50%;
        margin-right: 0.5rem;
      }
    }

    .options {
      color: ${({ theme }) => theme.nick};
    }
  }

  .content {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .actions {
    margin-top: 1rem;
    width: 42.5rem;
    display: flex;
    justify-content: space-between;
  }
`

const ButtonVariant = {
  comments: {
    background: defaultTheme['background-tweet-options'],
    color: defaultTheme.main,
  },
  like: {
    background: defaultTheme['like-background'],
    color: defaultTheme.like,
  },
  retweet: {
    background: defaultTheme['retweet-background'],
    color: defaultTheme.retweet,
  },
  share: {
    background: defaultTheme['background-tweet-options'],
    color: defaultTheme.main,
  },
}

interface ButtonActionProps {
  variant: 'comments' | 'like' | 'retweet' | 'share'
}

export const ButtonAction = styled.button<ButtonActionProps>`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.nick};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  .icon {
    color: ${({ theme }) => theme.nick};
    padding: 0.8rem;
  }

  &:hover {
    color: ${({ variant }) => ButtonVariant[variant].color};
    .icon {
      background-color: ${({ variant }) => ButtonVariant[variant].background};
      border-radius: 50%;
      color: ${({ variant }) => ButtonVariant[variant].color};
    }
  }

  span {
    font-size: 1.2rem;
  }
`
