import styled from "styled-components";
import { WidgetTitle } from "../../components/Sidebar";

import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

import { UserPropsTypes } from "../../types";
// const { user }: any = useContext(UserContext)
// const userCover = user.map((user: UserPropsTypes) => user.image_cover)


type UserAuxAttributes = {
	templateCover?: string,
	percentAnimation?: string
	skillBarBg?: string,
	skillBarWidth?: string,
	percentColor?: boolean,
	coverHeader?: string
}

export const Container = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	width: 100%;
	/* height: 100%; */
`

//USER HEADER (criar estilo aqui)

export const UserHeader = styled.header<UserAuxAttributes>`
	display: grid;
	grid-template-columns: 1fr;
	width: 100%;
	height: 30rem;
	background-image: url(${props => props.coverHeader});
	background-position: center;
	background-size: cover;
	position: relative;
`

export const HeaderInfo = styled.section`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	padding: 0 3%;
`;

export const UserData = styled.div`
	display: flex;
`;

export const UserProfileImage = styled.div`
	width: 16rem;
	height: 16rem;
	border: 6px solid transparent;
    background: #FFF;
    border-radius: 100%;
	position: absolute;
	bottom: -7.5rem;

	img {
		border-radius: 50%;
	}
`;

export const UserInfo = styled.div`
	padding-left: 18.5rem;
	margin-bottom: 2rem;
	width: 100%;
	color: #FFFFFF;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;

	.name {
		display: flex;
		align-items: center;
		gap: 5px;

		h2 {
			font-size: 2.2rem;
		}
	}

	.user-meta {
		display: flex;
		justify-content: space-between;

		.user-meta-left {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			span {
				font-size: 1.2rem;
				font-weight: 600;
				text-transform: uppercase;
			}
		}

		.user-meta-right {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			text-transform: uppercase;
		}
	}
`;

export const HeaderNetwork = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 3rem 3%;

	.header-network-content {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding-left: 18.5rem;
	}

	.social-networks {
		display: flex;
		gap: 2rem;

		svg {
			padding: 0.7rem;
			box-sizing: content-box;
			border-radius: 0.5rem;
			cursor: pointer;
			transition: all 0.2s;

			:hover {
				opacity: 0.9;
			}
		}

		svg.facebook-icon {
			background-color:  #2f5b9c;
		}

		svg.twitter-icon {
			background-color: #37bff1;
		}

		svg.instagram-icon {
			background-color: #f74881;
		}
	}

	.user-activities {
		display: flex;

		.posts-data, .comments-data, .views-data {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;

			span {
				display: block;
				padding: 0 2rem;
				text-transform: uppercase;
				font-size: 1.2rem;
				color: #888da8;

				:first-child {
					font-size: 2rem;
					font-weight: 500;
					color: #515365;
				}
			}
		}
	}

`;

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
	font-size: 1.5rem;
	padding: 2rem 3rem;

	svg {
		color: #888da8;
		/* font-size: 2.8rem; */
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

	span {
		cursor: pointer;
		line-height: 1.5;

		:hover {
			text-decoration: underline;
		}
	}
`;

export const ProjectDescription = styled.div`
	font-size: 1.4rem;
	line-height: 2.4rem;
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
	/* height: 3rem; */
	overflow: hidden;
	display: flex;
	background-color: #eeeeee;
	border-radius: 0.3rem;
	display: flex;
	align-items: center;
`

export const SkillBar = styled.div<UserAuxAttributes>`
	width: ${props => props.skillBarWidth};
	background-color: ${props => props.skillBarBg};
	height: 3rem;
	animation: skillbar .6s linear;
	border-radius: 0.3rem;

	span {
		display: block;
		height: 100%;
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
	height: 100%;
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
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

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
    padding: 1rem;
    background-color: rgba(0,0,0,.5);
    width: max-content;
	color: #FFFFFF;
	border-radius: 0.5rem;
	cursor: pointer;
`;

export const PortfolioItemDetail = styled.span`
	display: block;
    padding: 1rem;
    background-color: rgba(0,0,0,.5);
    width: max-content;
	color: #FFFFFF;
	border-radius: 0.5rem;
	cursor: pointer;
`;

//FIM Portólio área

export const Services = styled.section`
	width: 100%;
	border-radius: 0.5rem;
	background-color: #FFFFFF;
`;

export const ServicesContent = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
		padding: 2.5rem 3rem;
		background: #edf2f6;
		border-radius: 50%;
		transition: all ease 0.5s;

		:hover {
			background-color: #f75d52;

			> svg {
				color: var(--white-text-color);
			}
		}
	}

	.service-title {
		font-size: 1.5rem;
		color: #515365;
		font-weight: 700;
	}

	.service-description {
		font-size: 1.3rem;
		line-height: 2.4rem;
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