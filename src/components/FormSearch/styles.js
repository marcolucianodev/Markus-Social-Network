import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${props => props.activityInput ? '10px' : '15px'};
    border-radius: ${props => props.activityInput ? '30px' : '0px'};
    background-color: ${props => props.activityInput ? '#FFFFFF' : 'trasparent'};

    .input-area {
        width: 100%;
    }

    .activity-input-area {
        width: 100%;
        padding: 1rem 0 1rem 1rem;
    }

    input#form-search {
        background-color: transparent;
        outline: none;
        border: none;
        color: #9a9fbf;
        padding-right: 1.3rem;
        width: 100%;
        ::placeholder {
            color: #9a9fbf;
        }
    }

    button.search-button {
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .icon-search {
        color: #9a9fbf;
        font-size: 3rem;
    }
`;