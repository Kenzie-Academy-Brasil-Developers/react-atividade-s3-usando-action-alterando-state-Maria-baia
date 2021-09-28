import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        background-color: #fec5bb;
        display: flex;
        justify-content: center;
        color: #f8edeb;
    }

    input, button{
        background-color: #e8e8e4;
        border: none;
        font-size: 17px;
        border-radius: 5px;
        margin: 5px;
        color: #ffadad;
    }

    button{
        background-color: #ffe5d9;
    }
`