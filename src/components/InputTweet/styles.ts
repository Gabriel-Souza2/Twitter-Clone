import styled from 'styled-components'

export const InputTweetContainer = styled.div`
  width: 100%;
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
`
