import styled from "styled-components";

export const UserMenuContainer = styled.section`
	background-color: #edf2f6;
	display: flex;
	width: 100%;
	padding: 3.5rem;
`

export const UserMenu = styled.nav`
	background-color: #FFFFFF;
	width: 100%;
	height: auto;
`

export const MenuList = styled.ul`
	display: flex;
	flex-flow: wrap;
	list-style: none;
	width: 100%;
	height: 100%;
	background-color: #FFFFFF;
`;

export const List = styled.li`

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 10rem;
    border: 1px solid #e6ecf5;
    border-left: none;
    gap: 1rem;
    cursor: pointer;
    color: #9a9fbf;
    transition: all ease-in 0.3s;

    :hover {
      color: #ff5e3a;
    }

    :active {
      border-bottom: 1px solid red;
    }

    :first-child {
      border-left: 1px solid #e6ecf5;
    }

    span.user-menu-icon svg {
      font-size: 2.5rem;
    }

    span {
      font-size: 1.4rem;
      font-weight: 700;
    }

  }

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  border: 1px solid #e6ecf5;
  border-left: none;
  gap: 1rem;
  cursor: pointer;
  color: #9a9fbf;
  transition: all ease-in 0.3s;

  :hover {
    color: #ff5e3a;
  }

  :first-child {
    border-left: 1px solid #e6ecf5;
  }

  span.user-menu-icon svg {
    font-size: 2.5rem;
  }

  span {
    font-size: 1.4rem;
    font-weight: 700;
  } */

`;
