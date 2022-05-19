import styled from "styled-components";

export const MenuList = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

    ul.list-menu {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2.5rem;
        margin-top: 2rem;
        margin-bottom: 10rem;
        overflow: auto;
    }

    @media (min-width) {

    }

    span {
        font-size: 1.5rem;
    }

    .menu-icons {
        font-size: 3rem;
        color: #888da8;
        transition: all 0.4s;

        :hover {
            color: #ff5e3a;
        }
    }

    &.secondary-menu {
        position: absolute;
        left: 0;
        align-items: flex-start;
        padding-left: 2rem;
        padding-bottom: 2rem;
        width: 17rem;
        background-color: #FFFFFF;
        transition: all 0.5s;
        height: 100%;

        a {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

    }

    &.primary-menu {
        left: 0;
        transition: all 0.5s;

        li {
            position: relative;
        }

         li:nth-child(1):hover::after {
            content: 'Feed';
            font-size: 1.2rem;
            text-transform: uppercase;
            background-color: #515365;
            color: #FFFFFF;
            padding: 3px 0;
            position: absolute;
            top: 0.5rem;
            left: 5.5rem;
            border-left: 20px solid #515365;
            border-right: 20px solid #515365;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            opacity: 0.9;
        }

        li:nth-child(2):hover:after {
            content: 'Atividade';
            font-size: 1.2rem;
            text-transform: uppercase;
            background-color: #515365;
            color: #FFFFFF;
            padding: 3px 0;
            position: absolute;
            top: 0.5rem;
            left: 5.5rem;
            border-left: 20px solid #515365;
            border-right: 20px solid #515365;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            opacity: 0.9;
        }

        li:nth-child(3):hover:after {
            content: 'Membros';
            font-size: 1.2rem;
            text-transform: uppercase;
            background-color: #515365;
            color: #FFFFFF;
            padding: 3px 0;
            position: absolute;
            top: 0.5rem;
            left: 5.5rem;
            border-left: 20px solid #515365;
            border-right: 20px solid #515365;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            opacity: 0.9;
        }

        li:nth-child(4):hover:after {
            content: 'Grupos';
            font-size: 1.2rem;
            text-transform: uppercase;
            background-color: #515365;
            color: #FFFFFF;
            padding: 3px 0;
            position: absolute;
            top: 0.5rem;
            left: 5.5rem;
            border-left: 20px solid #515365;
            border-right: 20px solid #515365;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            opacity: 0.9;
        }

        li:nth-child(5):hover:after {
            content: 'Fotos';
            font-size: 1.2rem;
            text-transform: uppercase;
            background-color: #515365;
            color: #FFFFFF;
            padding: 3px 0;
            position: absolute;
            top: 0.5rem;
            left: 5.5rem;
            border-left: 20px solid #515365;
            border-right: 20px solid #515365;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            opacity: 0.9;
        }

        li:nth-child(6):hover:after {
            content: 'Músicas';
            font-size: 1.2rem;
            text-transform: uppercase;
            background-color: #515365;
            color: #FFFFFF;
            padding: 3px 0;
            position: absolute;
            top: 0.5rem;
            left: 5.5rem;
            border-left: 20px solid #515365;
            border-right: 20px solid #515365;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            opacity: 0.9;
        }

        li:nth-child(7):hover:after {
            content: 'Vídeos';
            font-size: 1.2rem;
            text-transform: uppercase;
            background-color: #515365;
            color: #FFFFFF;
            padding: 3px 0;
            position: absolute;
            top: 0.5rem;
            left: 5.5rem;
            border-left: 20px solid #515365;
            border-right: 20px solid #515365;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            opacity: 0.9;
        }

        li:nth-child(8):hover:after {
            content: 'Eventos';
            font-size: 1.2rem;
            text-transform: uppercase;
            background-color: #515365;
            color: #FFFFFF;
            padding: 3px 0;
            position: absolute;
            top: 0.5rem;
            left: 5.5rem;
            border-left: 20px solid #515365;
            border-right: 20px solid #515365;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            opacity: 0.9;
        }

        li:nth-child(9):hover:after {
            content: 'Fórum';
            font-size: 1.2rem;
            text-transform: uppercase;
            background-color: #515365;
            color: #FFFFFF;
            padding: 3px 0;
            position: absolute;
            top: 0.5rem;
            left: 5.5rem;
            border-left: 20px solid #515365;
            border-right: 20px solid #515365;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            opacity: 0.9;
        }

        li:nth-child(10):hover:after {
            content: 'Loja';
            font-size: 1.2rem;
            text-transform: uppercase;
            background-color: #515365;
            color: #FFFFFF;
            padding: 3px 0;
            position: absolute;
            top: 0.5rem;
            left: 5.5rem;
            border-left: 20px solid #515365;
            border-right: 20px solid #515365;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            opacity: 0.9;
        }

        span {
            display: none;
        }
    }
`;