import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h3{
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: bold;

h2 {
    font-family: 'Inter', sans-serif;
    font-size: 22px;
    font-weight: bold;
}

h1 {
    font-family: 'Inter', sans-serif;
    font-size: 26px;
    font-weight: bold;
}

}
span{
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: regular;

}

p {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
}

`;

export default GlobalStyles;
