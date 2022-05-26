import styled from "styled-components";

export const OptionsBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 7.8rem;
    background-color: #FFFFFF;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    color: #515365;
    position: relative;

    .display-menbers-number {
        display: flex;
        align-items: center;
        gap: 1rem;

        span {
            color: #515365;
            font-weight: 600;
            font-size: 1.3rem;

            &:hover {
                color: #ff5e3a;
            }
        }

        .number-of-members {
            font-weight: 900;
            color: #ff5e3a;
        }

    }

    .members-page-options-search-content {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .activity-members {
        flex: 1;
        display: flex;
        align-items: center;

        span.order-by {
            flex: 1;
            font-size: 1.1rem;
        }

        .members-select {
            display: flex;
            flex: 2;
            border: 1px solid #e6ecf5;
            padding: 1rem;
            border-radius: 0.3rem;
            cursor: pointer;
            position: relative;
        }

        .mebers-select-headline {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
       
            span.select-headline-text {
                font-size: 1.3rem;
            }

            span.select-headline-icon {
                font-size: 2rem;
                font-weight: 700;
                transform: rotate(270deg);
            }
        }

        ul.list-options {
            list-style: none;
            position: absolute;
            top: 4.5rem;
            left: 0;
            width: 100%;
            border: 1px solid #e6ecf5;
            background-color: #FFFFFF;

            li {
                padding: 1rem;
                font-size: 1.2rem;

                &:hover {
                    background-color: #edf2f6;
                } 
            }
        }

    }

    .search-members {
        flex: 1;
    }

`;