import styled from "styled-components"

const CabecaStyle = styled.header`
        display: flex;
        justify-content: space-between;
        padding: 30px 20px;
        background-color:purple;
       h1{
        width: 50%;
        color: pink;
        cursor: pointer;

       } 
       div{
        width: 50%;
        display:flex;
        justify-content: space-around;
        align-items: center;
       }
       a{
        color: pink;
        cursor: pointer;

        &:hover{
                color:black;
        }
       }
    
`
export default CabecaStyle