import styled from "styled-components";

export const Container = styled.section`
    width: 17rem;
    height: 100%;
    top: 0;
    position: fixed;
    z-index: 2;


    @media (max-width: 768px) {
        display: none;
    }
`