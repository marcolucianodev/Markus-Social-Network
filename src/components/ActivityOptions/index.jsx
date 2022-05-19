import styled from "styled-components";

export const ActivityOptions = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: #edf2f6;
    padding: 3.5rem 3.5rem 0;
    position: relative;

    .content-options-mobile {
        background-color: #FFFFFF;
        padding: 1.5rem;
        border-radius: 0.5rem;
    }

    .activity-options-mobile {
        display: flex;
        flex-direction: column;
        background: #f6f6f6;
        top: 8.5rem;
        width: 30%;
        right: 0;
        padding: 1%.5rem;
        border-radius: 0.5rem;
        opacity: 1;
        transition: all ease 0.5s;
        box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
    }

    .activity-options-mobile-close {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 9rem;
        width: 30%;
        right: 0;
        padding: 1.5rem;
        border-radius: 5px;
        opacity: 0;
        transition: all ease 0.5s;
    }

    .filter-box {
        background: #38a9ff;
        padding: 1.5rem;
        font-size: 1.3rem;
        text-align: center;
        color: #FFFFFF;
        border-radius: 3px;
        margin-bottom: 1rem;
    }

    .activity-select {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .activity-select-headline {
        width: 100%;
        text-align: center;
        background-color: #FFFFFF;
        color: #888da8;
        padding: 0.7rem;
        border-radius: 3px;
        font-size: 1.4rem;
        cursor: pointer;
        border: 1px solid #e6ecf5;
        display: flex;
        align-items: center;

        span.headline-text {
            width: 90%;
        }

        span.headline-icon {
            width: 10%;
            font-size: 2.5rem;
            font-weight: 700;
            transform: rotate(270deg);
        }

        span.headline-text:before {
            content: "−";
            margin-right: 0.5rem;
        }

        span.headline-text:after {
            content: "−";
            margin-left: 0.5rem;
        }
    }

    ul.activity-select-options {
        width: 100%;
        list-style: none;
        border-radius: 3px;
        background-color: #FFFFFF;
        color: #888da8;
        position: absolute;
        opacity: 1;
        top: 5rem;
        transition: all ease 0.5s;
        max-height: 400px;
        overflow: auto;
    }

    ul.activity-select-options-none {
        width: 100%;
        list-style: none;
        position: absolute;
        top: 0;
        opacity: 0;
        transition: all ease 0.5s;
        z-index: -999;
    }

    ul.activity-select-options li {
        cursor: pointer;
        padding: 1.3rem 3rem 1.3rem 1.8rem;
        font-size: 1.4rem;
    }

    ul.activity-select-options li:first-child:before {
        content: "−";
        margin-right: 0.5rem;
    }

    ul.activity-select-options li:first-child:after {
        content: "−";
        margin-left: 0.5rem;
    }

    ul.activity-select-options li:hover {
        background-color: #edf2f6;
    }

    .display-menbers-number {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: #515365;

        span {
            color: #515365;
            font-weight: 600;
            font-size: 1.3rem;
        }

        .number-of-members {
            font-weight: 400;
        }

    }

    @media (min-width: 769px) {
        display: none;
    }
`