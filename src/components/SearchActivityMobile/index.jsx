import styled from "styled-components";
import { Button } from "../Button";
import { SearchActivity } from "../SearchActivity";


export const SearchActivityMobile = styled(SearchActivity)`
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    background-color: transparent;
`

export const BoxActivityMobile = styled(Button)`
    background-color: #FFFFFF;
    border-radius: 3px;
    width: 100%;
    flex-direction: column;
    gap: 2rem;
    color: #9a9fbf;
    padding: 5rem;
    font-weight: 700;
    cursor: pointer;

    svg {
        font-size: 2.5rem;
    }

    &:active {
        -webkit-tap-highlight-color: transparent;
    }
`;