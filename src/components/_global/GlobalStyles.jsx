import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
     * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        display: grid;
        grid-template-columns: 1fr;
        font-family: 'Roboto', sans-serif;
        height: 100vh;
    }

    a {
        text-decoration: none;
        color: #515365;
        transition: all 0.3s;

        :hover {
            color: #ff5e3a;
        }
    }

    .user-check-icon {
        font-size: 1.8rem !important;
        font-weight: 600;
        margin-left: 0.4rem;
        background-color: #08ddc1;
        color: #FFFFFF;
        border-radius: 50%;
        padding: 2px;
    }

    .second-headline-icon {
        font-size: 1.7rem;
    }

    .acess-time-icon {
        font-size: 1.7rem;
    }
`

export default GlobalStyle;