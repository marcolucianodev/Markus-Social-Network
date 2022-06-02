import styled from "styled-components";

export const MainPagesContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 4rem;
    width: 100%;
    height: auto;
    padding: 3.5rem;
    background-color: #edf2f6;
    color: #888da8;
    
    .activity-members-mobile {
        @media (min-width: 769px) {
            display: none;
        }
    }
`;