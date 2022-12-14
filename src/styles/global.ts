import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
        box-shadow: none;
    }
    html {
        font-size: 62.5%;
    }
    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.text};
    }
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
