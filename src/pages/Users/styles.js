import styled from "styled-components";

export const Container = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	width: 100%;
	height: 100%;
`

//USER HEADER (criar estilo aqui)

export const UserHeader = styled.header`
	display: grid;
	grid-template-columns: 1fr;
	width: 100%;
	height: auto;
	background-color: gray;
`

export const UserMenu = styled.section`
	background-color: #edf2f6;
	display: flex;
	width: 100%;
	padding: 3.5rem;
`

export const UserMenuList = styled.nav`
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

	li {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 10rem;
		background-color: darkred;
		border: 1px solid ;
	}
`;

export const UserContent = styled.section`
	display: grid;
	grid-template-columns: 3fr 1fr;
	width: 100%;
	height: auto;
	padding: 3.5rem;
	background-color: #edf2f6;
	color: #888da8;
`;

export const UserSidebar = styled.aside`
		display: grid;
    grid-gap: 3rem;
`