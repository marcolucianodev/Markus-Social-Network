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
	background-color: red;
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  background-color: darkred;
  border: 1px solid;
  gap: 1rem;
  cursor: pointer;

  span.user-menu-icon svg {
    font-size: 2.5rem;
  }

  span {
    font-size: 1.4rem;
    font-weight: 700;
  }

`;
