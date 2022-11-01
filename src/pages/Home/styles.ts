import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
`

export const MenuContainer = styled.aside`
  padding: 0.5rem 4rem;
  border-right: 1px solid ${({ theme }) => theme.borders};
`

export const InitialPageContainer = styled.div``

export const HeaderContainer = styled.header``

export const TweetsContainer = styled.aside``
export const TrendsContainer = styled.div``
