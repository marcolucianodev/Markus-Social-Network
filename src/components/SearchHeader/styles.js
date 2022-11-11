import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 35%;
    background-color: #494c62;

    @media (max-width: 768px) {
        width: calc(100% - 14rem);
    }
`;