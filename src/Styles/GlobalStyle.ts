import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*, *::before, *:after {
    -webkit-tap-highlight-color: transparent;
}

html {
    font-family: 'Instrument Sans', sans-serif;
}

body  {
    width: 100vw;
    min-height: 100vh;
    background-color: #fafafa;
    overflow-x: hidden;

}


body > div {
    width: 100vw;
    min-height: 100vh;
    background-color: grey;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    gap: 24px;
    place-items: center;
}



input,
fieldset,
button {
    border: unset;
    outline: unset;
}


button {
    cursor: pointer;
}

input {
    height: 40px;
    width: 100%;

    border-radius: 8px;
    background: #FFF;
    border: 1px solid #D9D9D9;
    padding: 12px 16px;

    transition: .5s ease border box-shadow;

    &:focus {
        border: 1px solid #633CFF;
        box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
    }
}


`;

export { GlobalStyle };
