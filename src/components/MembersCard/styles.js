import styled from "styled-components";

export const Container = styled.div`
/* <<<<<<< HEAD
    background-color: blue;
======= */
    background-color: #FFFFFF;
/* >>>>>>> members-page */
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
/* <<<<<<< HEAD
======= */
        padding: 1rem;
/* >>>>>>> members-page */

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
/* <<<<<<< HEAD
            width: 100%;
            text-align: center;
======= */
            margin-top: 0.5rem;
            width: 100%;
            text-align: center;
            font-size: 1.2rem;
/* >>>>>>> members-page */
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
/* <<<<<<< HEAD
======= */
                gap: 0.4rem;

                .star-rate-icon {
                    color: yellow;
                    font-size: 1.8rem;
                }
/* >>>>>>> members-page */
            }

            .ratings {
                display: flex;
                justify-content: center;
                width: 100%;
/* <<<<<<< HEAD
======= */
                margin-top: 1.5rem;
                gap: 0.5rem;
                text-transform: uppercase;
            }
        }
    }

    .member-statistics {
        display: flex;
        padding: 1rem 1rem 4rem;

        ul.list-user-statistics {
            list-style: none;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1.5rem;

            li {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 4rem;
                height: 4rem;
            }

            .statistics-user-post-icon,
            .statistics-user-comment-icon,
            .statistics-user-views-icon,
            .statistics-user-friendship-icon {
                font-size: 3rem;
                box-sizing: content-box;
                padding: 0.5rem;
                border-radius: 0.3rem;
                color: #FFFFFF;
            }

            .statistics-user-post-icon {
                background-color: #ff5e3a;
            }

            .statistics-user-comment-icon {
                background-color: #38a9ff;
            }

            .statistics-user-views-icon {
                background-color: #7c5ac2;
            }

            .statistics-user-friendship-icon {
                background-color: #f76697;
/* >>>>>>> members-page */
            }
        }
    }
`;