import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --max-width: 1100px;
        --border-radius: 12px;
        --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
        'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
        'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;

        /* color */
        --primary: #f1f1f1;
        --secondary: rgb(0, 0, 0);
        --tertiary: rgb(189, 155, 25);
    }

/* ============ Scrollbar ============ */
    *::-webkit-scrollbar {
    width: 10px;
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--secondary);
        border-radius: 14px;
        border: 3px solid var(--primary);
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: var(--tertiary);
    }
/* ==================================== */
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    html,
    body {
        overflow-x: hidden;
    }
    
    body{
        min-width: 300px;
    }

    h1{
        text-align: center;
        padding: 5px;
    }
`;

export default GlobalStyle;