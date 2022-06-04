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

    @media (min-width: 769px) and (max-width: 999px) {
       height: auto;
       flex-direction: column;
       padding: 2rem 0px;
       gap: 2rem;
    }

    @media (max-width: 768px) {
        display: none;
    }

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
        gap: 1rem;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    .activity-members {
        flex: 1;
        display: flex;
        align-items: center;

        span.order-by {
            flex: 1;
            font-size: 1rem;

            @media (max-width: 768px) {
                background-color: #f75d52;
                color: #FFFFFF;
                margin-bottom: 1rem;
                padding: 1rem;
                font-size: 1.2rem;
                border-radius: 0.3rem;
            }
        }

        .members-select {
            display: flex;
            flex: 2;
            border: 1px solid #e6ecf5;
            padding: 0.7rem;
            border-radius: 0.3rem;
            cursor: pointer;
            position: relative;
            
            @media (max-width: 768px) {
                width: 100%;
            }
            
        }

        .mebers-select-headline {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
       
            span.select-headline-text {
                font-size: 1.2rem;

                @media (max-width: 768px) {
                    width: 100%;
                    text-align: center;
                }
            }

            span.select-headline-icon {
                font-size: 2rem;
                font-weight: 700;
                transform: rotate(90deg);
                transition: all ease 0.3s;
                user-select: none;

                @media (max-width: 768px) {
                    margin-right: 1rem;
                }
            }

            span.select-headline-icon-active {
                font-size: 2rem;
                font-weight: 700;
                transform: rotate(270deg);
                transition: all ease 0.3s;
                user-select: none;

                @media (max-width: 768px) {
                    margin-right: 1rem;
                }
            }
        }

        ul.list-options {
            list-style: none;
            position: absolute;
            top: 3.8rem;
            left: 0;
            width: 100%;
            border: 1px solid #e6ecf5;
            background-color: #FFFFFF;
            opacity: 1;
            transition: all ease 0.5s;

            li {
                padding: 1rem;
                font-size: 1.2rem;

                &:hover {
                    background-color: #edf2f6;
                } 
            }
        }

        ul.list-options-none {
            list-style: none;
            position: absolute;
            top: 3.8rem;
            left: 0;
            width: 100%;
            border: 1px solid #e6ecf5;
            background-color: #FFFFFF;
            opacity: 0;
            transition: all ease 0.5s;

            li {
                padding: 1rem;
                font-size: 1.2rem;
            }
        }

        @media (max-width: 768px) {
            flex-direction: column;
        }

    }

    .search-members {
        flex: 1;

        form {
            display: flex;
            width: 100%;

            label {
                display: flex;
                justify-content: flex-end;
                width: 100%;
            }

            input {
                padding: 1.15rem;
                border-radius: 0.3rem;
            }

            input[type= "text"]{
                border: 1px solid #e6ecf5;
                outline: none;
                width: 100%;
                color: #515365;
            }

            input[type= "submit"] {
                border: none;
                background-color: #f75d52;
                color: #FFFFFF;

                @media (max-width: 768px) {
                    width: 20%;
                }

                @media (max-width: 520px) {
                    width: auto;
                }
            }
        }
    }

    /*Mobile Styles*/

    &.show-search-members-mobile,
    &.show-filter-members-mobile {
        display: flex;
        margin-bottom: 1rem;
    }

    &.show-filter-members-mobile {
        height: auto;
    }

    &.show-search-members-mobile-none,
    &.show-filter-members-mobile-none {
        display: none;
    }

`;