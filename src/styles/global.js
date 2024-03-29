import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Inter';
    color: white;
    
}

    :root{
        --pink: #FF577F;
        --darkPink: #FF427F;
        --pinkOff: #59323F;
        --greyOne: #868E96;
        --greyTwo: #343B41;
        --greyThree: #212529;
        --greyFour: #121214;
        --background: #000000;
    }
    body{
        background-color: var(--vanilla);
        color: var(--black);
    }
    body, input, button{
        font-family: 'PT Serif', serif;
        font-size: 1rem;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Inter';
        font-weight:700;
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
`;
