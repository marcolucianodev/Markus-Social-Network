import styled from "styled-components";

export const UserMenuContainer = styled.section`
	background-color: var(--main-background-content);
	display: flex;
	width: 100%;
	padding: 3.5rem;
`

export const UserMenu = styled.nav`
	background-color: var(--white-background);
	width: 100%;
	height: auto;
`

export const MenuList = styled.ul`
	display: flex;
	flex-flow: wrap;
	list-style: none;
	width: 100%;
	height: 100%;
	background-color: var(--white-background);
`;

export const List = styled.li`

  a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 10rem;
      height: 10rem;
      border: 1px solid var(--border-light-white);
      border-left: none;
      gap: 1rem;
      cursor: pointer;
      color: var(--input-search-color);
      transition: all ease-in 0.3s;

      :hover {
        color: var(--main-color);
      }

      :first-child {
        border-left: 1px solid var(--border-light-white);
      }

      span.user-menu-icon svg {
        font-size: 2.5rem;
      }

      span {
        font-size: 1.4rem;
        font-weight: 700;
      }

  }

`;
