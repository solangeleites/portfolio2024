import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
        :root{
        --beige: #FEFAE0;
        --verde: #283618;
        --oliva: #606C38 ;
    }
    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        font-family: 'Playfair Display', serif;
        font-family: 'Quicksand', sans-serif;
        font-family: 'Raleway', sans-serif;
        background-color: var(--beige);
        color: var(--verde);
        scroll-behavior: smooth;
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');
    }
    html {
          scroll-behavior: smooth;
    }`;
