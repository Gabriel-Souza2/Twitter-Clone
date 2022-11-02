import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  div.avatar-wrapper {
    margin: 0 1rem;
  }

  div.user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 1.5rem;

    span.user-name {
      font-weight: bold;
      line-height: 24px;
    }

    span.nick {
      color: ${({ theme }) => theme.nick};
    }

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`
