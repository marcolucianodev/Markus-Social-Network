import styled from "styled-components";

export const Container = styled.div`
    background-color: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;

    .member-cover-image {
        height: 15rem;
        width: 100%;

        img {
            height: 100%;
            width: 100%;
            border-top-left-radius: 0.5rem;
            border-top-right-radius: 0.5rem;
            object-fit: cover;
        }
    }

    .member-profile-image {
        width: 10rem;
        height: 10rem;
        margin-top: -4rem;

        img {
            width: 9.2rem;
            height: 9.2rem;
            border-radius: 100%;
            border: 4px solid #FFFFFF;
        }
    }

    .member-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        .info-user-name {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.4rem;
            width: 100%;

            a {
                display: flex;
            }

            span.user-name {
                margin-right: 0.5rem;
                font-weight: 700;
                color: #515365;
                transition: 0.5s;

                &:hover {
                    color: #ff5e3a;
                }
            }
        }

        .info-user-nickname {
            margin-bottom: 2rem;
            width: 100%;
            text-align: center;
        }

        .info-user-badges {
            display: flex;
            justify-content: center;
            margin-bottom: 1.5rem;
            width: 100%;

            ul.badges-list {
                list-style: none;
                display: flex;

                li img {
                    width: 3.5rem;
                    height: 3.5rem;
                }

                li img:not(last-child) {
                    margin-right: 1rem;
                }
            }
        }

        .info-user-ratings-datails {
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 100%;

            .user-stars {
                width: 100%;
                display: flex;
                justify-content: center;
            }

            .ratings {
                display: flex;
                justify-content: center;
                width: 100%;
            }
        }
    }
`;