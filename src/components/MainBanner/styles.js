import styled from "styled-components";
import banner from "../_assets/img/background-banner.jpg";

export const Container = styled.section`
    width: 100%;
    height: 50rem;
    background-color: #eeeeee;
    background-image: url(${banner});
    background-position: center;
    background-size: cover;
    padding: 3rem 3rem 0;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    z-index: -2;
    margin-top: 7rem;

    .desc-banner {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        margin-top: 5rem;
        font-size: 4rem;
        font-weight: 300;
    }

    p {
        display: inline-block;
        margin: 4rem 0;
        width: 75%;
        font-size: 1.5rem;
        font-weight: 400;
    }

    h3 {
        text-transform: uppercase;
        font-weight: 300;
    }

    .img-up-banner-area {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;

        img {
            width: inherit;
        }
    }

    @media (max-width: 351px) {
        p {
            margin: 1rem 0;
        }

        h1 {
            margin-top: 0;
        }
    }

    @media (max-width: 600px) {
        padding-bottom: 1rem;
    }

    @media (max-width: 768px) {
        margin-top: 0;
    }

    @media (min-width: 1200px) {
            .img-up-banner-area img {
                width: auto;
            }
        }
`;