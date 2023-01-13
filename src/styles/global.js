import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
    }

    body {
        width: 100vw;
        height: 100vw;
        display: flex;
        background-color: #f7f7f7;
    }

    #root {
        width: 100%;
    }
`;

export default Global;