import styled from "styled-components";
import { Button } from '../Button'

export const Container = styled.section`
    display: grid;
    grid-gap: 3rem;

    aside {
        display: flex;
        flex-direction: column;
        width: 100%;
        border-radius: 0.5rem;
        grid-gap: 3.5rem;
    }
`;

export const AsideButton = styled(Button)`
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-top: 2rem;
    border: 0.1rem solid #ff5e3a;
    background-color: #FFFFFF;
    color: #515365;
    transition: all 0.3s;

    :hover {
        background-color: #ff5e3a;
        color: #FFFFFF;
    }
`;