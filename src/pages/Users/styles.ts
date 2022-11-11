import styled from "styled-components";
import { WidgetTitle } from "../../components/Sidebar";

type UserAuxAttributes = {
	templateCover?: string,
	percentAnimation?: string
	skillBarBg?: string,
	skillBarWidth?: string,
	percentColor?: boolean
}

export const Container = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	width: 100%;
	/* height: 100%; */
`

//USER HEADER (criar estilo aqui)

export const UserHeader = styled.header`
	display: grid;
	grid-template-columns: 1fr;
	width: 100%;
	height: auto;
	background-color: gray;
`

// export const UserMenu = styled.section`
// 	background-color: #edf2f6;
// 	display: flex;
// 	width: 100%;
// 	padding: 3.5rem;.
// `

// export const UserMenuList = styled.nav`
// 	background-color: #FFFFFF;
// 	width: 100%;
// 	height: auto;
// `

// export const MenuList = styled.ul`
// 	display: flex;
// 	flex-flow: wrap;
// 	list-style: none;
// 	width: 100%;
// 	height: 100%;
// 	background-color: red;

// 	li {
// 		display: flex;
// 		flex-direction: column;
// 		justify-content: center;
// 		align-items: center;
// 		width: 10rem;
// 		height: 10rem;
// 		background-color: darkred;
// 		border: 1px solid;
// 		gap: 1rem;
// 		cursor: pointer;

// 		.user-menu-icon {
// 			font-size: 2.5rem;
// 		}

// 		span {
// 			font-size: 1.4rem;
// 			font-weight: 700;
// 		}
// 	}
// `;

export const UserContent = styled.article`
	display: grid;
	grid-template-columns: 3fr 1fr;
	width: 100%;
	height: auto;
	padding: 3.5rem;
	background-color: #edf2f6;
	color: #888da8;
	gap: 3rem;
`;

export const UserMainContent = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	gap: 3rem;
`;





//Inicio estilização do Slider

// export const Slider = styled.section`
// 	margin: 0 auto;
//   width: 800px;
// 	width: 100%;
//   height: 250px;
//   overflow: hidden;
// 	position: relative;
// 	border-radius: 0.5rem;
// `;

// export const Slides = styled.div`
// 	/* width: 400%; */
// 	width: 400%;
//   height: 250px;
//   display: flex;

// 	input {
// 		display: none;
// 	}

// 	#radio1:checked ~ .first {
// 		margin-left: 0;
// 	}

// 	#radio2:checked ~ .first {
// 		margin-left: -25%;
// 	}

// 	#radio3:checked ~ .first {
// 		margin-left: -50%;
// 	}

// 	#radio4:checked ~ .first {
// 		margin-left: -75%;
// 	}

// 	#radio1:checked ~ .first {
// 		background-color: #FFFFFF;
// 	}
// `;

// export const InputSlides = styled.input`
// 	display: none;

// 	#radio1:checked ~ .first {
// 		margin-left: 0;
// 	}

// 	#radio2:checked ~ .first {
// 		margin-left: -25%;
// 	}

// 	#radio3:checked ~ .first {
// 		margin-left: -50%;
// }

// 	#radio4:checked ~ .first {
// 		margin-left: -75%;
// 	}

// 	#radio1:checked ~, 
// 	#radio2:checked ~, 
// 	#radio3:checked ~,
// 	#radio4:checked ~ {
//   	background-color: #fff;
// 	}

// 	#radio1 {
// 		:checked {
// 			background-color: blue;
// 		}
// 	}

// `;

// export const SlideItems = styled.div`
// 	width: 25%;
//   position: relative;
//   transition: 1s;

// 	img {
// 		/* width: 800px; */
// 		/* width: 100%; */
// 		object-fit: cover;
//     object-position: center;
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     width: 100%;
//     height: 100%;
// 	}
// `;

// export const AutoNavigation = styled.div`
// 	display: flex;
//   justify-content: center;
//   width: 800px;
//   width: 100%;
// 	position: absolute;
//   margin-top: 360px;

// 	div {
// 		border: 2px solid red;
// 		padding: 5px;
// 		border-radius: 10px;

// 		:not(:last-child) {
// 			margin-right: 30px;
// 		}

// 		:checked {
// 			background-color: #FFFFFF;
// 		}
// 	}
// `;

// export const ManualNavigation = styled.div`
// 	position: absolute;
//   /* width: 800px;
// 	width: 100%; */
//   display: flex;
//   justify-content: center;
//   margin-top: -40px;
// 	left: 50%;
// 	right: 50%;

// 	.btn-manual {
// 		border: 2px solid #fff;
// 		padding: 5px;
// 		border-radius: 10px;
// 		cursor: pointer;

// 		:not(:last-child){
// 			margin-right: 30px;
// 		}

// 		:hover {
// 			background-color: rgba(255, 255, 255, 0.6);
// 		}

// 	}
// `

//FIM da área do slider

export const Project = styled.section`
	width: 100%;
	border-radius: 0.5rem;
	background-color: #FFFFFF;
`;

export const UserSectionTitle = styled(WidgetTitle)`
	color: #515365;
	font-size: 1.8rem;
	padding: 2rem 3rem;

	svg {
		color: #888da8;
		font-size: 2.8rem;
	}
`;

export const ProjectContent = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

export const ProjectTemplate = styled.div<UserAuxAttributes>`
	background-image: url(${props => props.templateCover});
	background-position: center;
	background-size: cover;
	height: auto;
	width: 100%;
`;

export const ProjectInfo = styled.div`
	width: 100%;
	padding: 3rem;
`;

export const ProjectHead = styled.div`
	display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const ProjectType = styled.span`
	text-transform: uppercase;
	background-color: #f75d52;
	color: #FFFFFF;
	font-weight: 900;
	padding: 0.5rem 1.5rem;
	width: fit-content;
	border-radius: 0.3rem;
`;

export const ProjectTitle = styled.h2`
	text-transform: uppercase;
	color: #515365;
`;

export const ProjectCategory = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 0.5rem;
	font-size: 1.2rem;
	text-transform: lowercase;
`;

export const ProjectLink = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 0.5rem;
	font-size: 1.2rem;
	padding-bottom: 1rem;

	svg {
		font-size: 1.8rem;
		transform: rotate(130deg);
	}

	span {
		cursor: pointer;
		line-height: 1.5;

		:hover {
			text-decoration: underline;
		}
	}
`;

export const ProjectDescription = styled.div`
	font-size: 1.7rem;
	line-height: 1.7;
	margin-bottom: 2rem;
`;

export const ProjectTags = styled.ul`
	display: flex;
	gap: 5px;
	width: 100%;
	list-style: none;
`;

export const ProjectTagsItems = styled.li`
	font-size: 1.2rem;
	text-transform: uppercase;
	font-weight: 500;
	background-color: #f2f2f2;
	padding: 0.5rem 1.2rem;

	span.hastag {
		color: #ff7f76;
	}
`;

//FIM área do project

export const Skills = styled.section`
	width: 100%;
	border-radius: 0.5rem;
	background-color: #FFFFFF;
`;

export const SkillProgressBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	padding: 2rem 3rem;
`;

export const SkillProgressBar = styled.div`
	width: 100%;
	position: relative;
	height: 3rem;
	overflow-x: hidden;
	display: flex;
	background-color: #eeeeee;
	border-radius: 0.3rem;
`

export const SkillBar = styled.div<UserAuxAttributes>`
	width: ${props => props.skillBarWidth};
	background-color: ${props => props.skillBarBg};
	height: 3.5rem;
	animation: skillbar .6s linear;
	border-radius: 0.3rem;

	span {
		display: block;
		height: inherit;
		width: max-content;
		font-size: 1.4rem;
		font-weight: 700;
		display: flex;
		align-items: center;
		padding: 15px;
		border-radius: 0.3rem;
		background-color: rgba(255, 255, 255, 0.2);
		color: #FFFFFF;
		text-transform: uppercase;
	}

	@keyframes skillbar {
		0% {
			transform: translateX(-${props => props.percentAnimation}%);
		}

		100% {
			transform: translateX(0);
		}
	}
`;

export const SkillBarPercent = styled.div<UserAuxAttributes>`
	position: absolute;
	right: 10px;
	top: 0;
	display: flex;
	align-items: center;
	height: inherit;
	font-size: 1.3rem;
	font-weight: 600;
	color: ${props => props.percentColor ? '#FFFFFF' : '#888da8'};
`;

//FIM Skills area

export const Portfolio = styled.section`
	width: 100%;
	border-radius: 0.5rem;
	background-color: #FFFFFF;
`;

export const PortfolioContent = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

	.portfolio-box {
		position: relative;

		.portfolio-links {
			position: absolute;
			bottom: 3rem;
			right: 3rem;
			width: inherit;
			background: transparent;
			display: flex;
			justify-content: flex-end;
			gap: 5px;
			opacity: 0;
			transition: 0.5s;
		}

		:hover > .portfolio-links {
			opacity: 1;
		}
	}
`;

export const PortfolioItem = styled.img<UserAuxAttributes>`
	width: 100%;
	height: 100%;
`;

export const PortfolioItemLink = styled.span`
	display: block;
    padding: 10px;
    background-color: rgba(0,0,0,.5);
    width: max-content;
	color: #FFFFFF;
	border-radius: 0.5rem;
	cursor: pointer;

	svg {
		transform: rotate(130deg);
		font-size: 3rem;
	}
`;

export const PortfolioItemDetail = styled.span`
	display: block;
    padding: 10px;
    background-color: rgba(0,0,0,.5);
    width: max-content;
	color: #FFFFFF;
	border-radius: 0.5rem;
	cursor: pointer;

	svg {
		font-size: 3rem;
	}
`;

//FIM Portólio área

export const Services = styled.section`
	width: 100%;
	border-radius: 0.5rem;
	background-color: #FFFFFF;
`;

export const ServicesContent = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	padding: 3.5rem 3.5rem 0;
`;

export const Service = styled.div`
	width: auto;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	padding: 20px;

	.service-icon {
		padding: 35px 40px;
		background: #edf2f6;
		border-radius: 50%;
		transition: all ease 0.5s;

		:hover {
			background-color: #f75d52;

			> img {
				filter: invert(99%) sepia(0%) saturate(1343%) hue-rotate(190deg) brightness(117%) contrast(100%);
			}
		}
		
		img {
			width: 30px;
			filter: invert(57%) sepia(18%) saturate(390%) hue-rotate(193deg) brightness(95%) contrast(91%);
		}
	}

	.service-title {
		font-size: 1.8rem;
		color: #515365;
		font-weight: 700;
	}

	.service-description {
		font-size: 1.7rem;
		line-height: 1.7;
		text-align: center;
	}	

`;

//FIM Services área

// export const Reviews = styled.section`

// `;

//USER SIDEBAR (criar estilo aqui)

export const UserSidebar = styled.aside`
		display: grid;
		grid-template-columns: 1fr;
`