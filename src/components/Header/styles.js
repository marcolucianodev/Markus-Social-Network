import styled from "styled-components";


export const  HeaderContainer = styled.section`
    display: flex;
    justify-content: space-between;
     width: 100%;
     height: 7rem;
     background-color: #3f4257;
     position: fixed;
     width: calc(100% - 17rem);
     z-index: 2;

     .icon-login {
         color: #FFFFFF;
     }

     @media (max-width: 768px) {
         width: 100%;
         position: static;
     }
`;