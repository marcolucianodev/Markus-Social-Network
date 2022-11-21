import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {

        //Colors variables
        --main-color: #ff5e3a;
        --secondary-color: #3f4257;
        --background-content: #edf2f6;
        --main-blue: #38a9ff;
        --main-purple: #7c5ac2;
        --main-pink: #f76697;
        --main-yellow: #FFFF00;
        --ligth-blue: #08ddc1;
        --ligth-green: #8fce46;
        --title-color: #515365;
        --text-color: #888da8;
        --white-text-color: #FFFFFF;
        --search-button-color: #f75d52;
        --facebookBG: #2f5b9c;
        --instagranBG: #f74881;
        --twitterBG: #37bff1;
        --php-skill-color: rgb(255,96,58);
        --js-skill-color: rgb(255,162,58);
        --css-skill-color: rgb(42,125,161);
        --html-skill-color: rgb(42,183,99);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5% !important;
        //font-size: 80%;
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