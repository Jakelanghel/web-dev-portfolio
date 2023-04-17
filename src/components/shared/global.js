import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-dark: #1D1D1D;
        --secondary-dark: #181818;
        --white: #DBDBDB;

        --dark-accent: #58AFEF;

        --light-gray: #5c636c;
        --whiteish: #abb2ad;

        /* SYNTAX COLORS */
        --stx-purple: #AD78DD;
        --stx-lightBlue: #58AFEF;
        --stx-darkBlue: #528BFF;
        --stx-yellow: #E6B424;
        --stx-softYellow: #E5C07B;
        --stx-gold: #CEB06C;
        --stx-orange: #D38843;
        --stx-green: #14A76C;

        /* tech colors */
        --html: #D84924;
        --css: #3C5EDF;
        --js: #EAD41C;
        --react: #5CCFEE;
        --sass: #C36291;
        --node: #84BB00;
        --linux: #168ECA;

        

    }

    #root {
        height: 100%;
    }

    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        padding-bottom: 0;
        background-color: ${({ theme }) => theme.main.primaryBG};
        font-family: 'Roboto', sans-serif;
    }

    img, 
    button {
        display: block;
    }

    .container-app {
        height: 100%;
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .pg-pd {
        padding-top: 2rem;
    }



   
    .filter-white {
        filter: invert(100%) sepia(0%) saturate(3787%) hue-rotate(139deg) brightness(112%) contrast(90%);
    }

    .filter-gray {
        filter: brightness(0) saturate(100%) invert(39%) sepia(8%) 
                saturate(547%) hue-rotate(174deg) brightness(94%) contrast(91%);    
    }

    .filter-accent {
        filter: invert(55%) sepia(86%) saturate(463%) hue-rotate(176deg) brightness(102%) contrast(87%);
    }

    .filter-purple {
        filter: invert(58%) sepia(13%) saturate(4657%) hue-rotate(225deg) brightness(94%) contrast(83%);
    }

    .filter-html-color {
        filter: invert(56%) sepia(37%) saturate(3163%) hue-rotate(339deg) brightness(90%) contrast(85%);    
    }

    .filter-css-color {
        filter: invert(33%) sepia(55%) saturate(3905%) hue-rotate(215deg) brightness(90%) contrast(100%);
    }

    .filter-js-color {
        filter: invert(84%) sepia(82%) saturate(521%) hue-rotate(341deg) brightness(91%) contrast(103%);
    }

    .filter-react-color {
        filter: invert(78%) sepia(9%) saturate(2866%) hue-rotate(157deg) brightness(97%) contrast(92%);
    }

    .filter-sass-color {
        filter: invert(49%) sepia(32%) saturate(726%) hue-rotate(279deg) brightness(91%) contrast(93%);
    }

    .filter-git-color {
        filter: invert(52%) sepia(72%) saturate(4890%) hue-rotate(341deg) brightness(91%) contrast(96%);
    }

    .filter-node-color {
        filter: invert(54%) sepia(67%) saturate(919%) hue-rotate(40deg) brightness(100%) contrast(101%);
    }

    .filter-linux-color {
        filter: invert(39%) sepia(75%) saturate(2164%) hue-rotate(174deg) brightness(94%) contrast(83%);
    }
        `;
