import { createGlobalStyle } from 'styled-components'

 const globalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body{
        height:100%
    }

    button{
        background-color: none;
        border: none;
        outline: none;
    }

    a{
        text-decoration: none;
        outline: none;
    }

   
`
export default globalStyle