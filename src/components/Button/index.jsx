import styled from "styled-components";


export const Button = styled.button`
    width: 7rem;
    height: 7rem;
    background-color: #ff5e3a;
    border: none;
    display: ${props => props.btnMobile ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: ${props => props.positionBtn ? 'fixed' : 'static'};

    .icon-main-menu {
        color: #FFFFFF;
        font-size: 4rem;
    }

    span.show-login-ballon {
        background-color: #3f4257;
        color: #FFFFFF;
        text-transform: uppercase;
        font-size: 1rem;
        padding: 5px 12px;
        position: absolute;
        right: 8.5rem;
        border-radius: 5px;
        opacity: 1;
        transition: all ease 1s;
        cursor: default;

        @media (max-width: 768px) {
            display: none;
        }
    }

    span.show-login-ballon:after, span.hide-login-ballon:after {
        content: "";
        width: 0; 
        height: 0;
        position: absolute;
        right: -0.8rem;
        bottom: -0.1rem;
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent;
        border-left: 12px solid #3f4257;
        border-radius: 50%;
    }

    span.hide-login-ballon {
        background-color: #3f4257;
        text-transform: uppercase;
        font-size: 1rem;
        padding: 5px 12px;
        position: absolute;
        /* right: 0px; */
        right: 8.5rem;
        border-radius: 5px;
        opacity: 0;
        transition: all ease 1s;
    }

    @media (max-width: 768px) {
        display: ${props => props.btnDesktop};
    }
`;

export const LoginButton = styled(Button)`
    background-color: #ff5e3a;

    .icon-login {
        font-size: 2.5rem;
    }
`;