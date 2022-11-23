import styled from "styled-components";
import { WidgetTitle } from "../../components/Sidebar";
import { WidgetUserInfo } from "../../components/WidgetUserInfo";

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
`
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
    background: var(--white-background);
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
	color: var(--white-text-color);
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
			background-color:  var(--facebookBG);
		}

		svg.twitter-icon {
			background-color: var(--twitterBG);
		}

		svg.instagram-icon {
			background-color: var(--instagranBG);
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
				color: var(--text-color);

				:first-child {
					font-size: 2rem;
					font-weight: 500;
					color: var(--title-color);
				}
			}
		}
	}

`;

export const UserContent = styled.article`
	display: grid;
	grid-template-columns: 3fr 1fr;
	width: 100%;
	height: auto;
	padding: 3.5rem;
	background-color: var(--main-background-content);
	color: var(--text-color);
	gap: 3rem;
`;

export const UserMainContent = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	gap: 3rem;
`;

export const Project = styled.section`
	width: 100%;
	border-radius: 0.5rem;
	background-color: var(--white-background);
`;

export const UserSectionTitle = styled(WidgetTitle)`
	color: var(--title-color);
	font-size: 1.5rem;
	padding: 2rem 3rem;

	svg {
		color: var(--text-color);
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
	background-color: var(--search-button-color);
	color: var(--white-text-color);
	font-weight: 900;
	padding: 0.5rem 1.5rem;
	width: fit-content;
	border-radius: 0.3rem;
`;

export const ProjectTitle = styled.h2`
	text-transform: uppercase;
	color: var(--title-color);
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
	background-color: var(--main-background-content);
	padding: 0.5rem 1.2rem;

	span.hastag {
		color: var(--main-color);
	}
`;

//FIM área do project

export const Skills = styled.section`
	width: 100%;
	border-radius: 0.5rem;
	background-color: var(--white-background);
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
	overflow: hidden;
	display: flex;
	background-color: var(--main-background-content);
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
		background-color: var(--bg-light-opacity-2);
		color: var(--white-text-color);
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
	color: ${props => props.percentColor ? 'var(--white-text-color)' : 'var(--text-color)'};
`;

//FIM Skills area

export const Portfolio = styled.section`
	width: 100%;
	border-radius: 0.5rem;
	background-color: var(--white-background);
`;

export const PortfolioContent = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

	.portfolio-box {
		position: relative;

		.portfolio-links {
			position: absolute;
			bottom: 2rem;
			right: 2rem;
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
	display: flex;
	justify-content: center;
	align-items: center;
    padding: 1rem;
    background-color: var(--bg-dark-opaciy-5);
    width: max-content;
	height: max-content;
	color: var(--white-text-color);
	border-radius: 0.5rem;
	cursor: pointer;
`;

export const PortfolioItemDetail = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
    padding: 1rem;
    background-color: var(--bg-dark-opaciy-5);
    width: max-content;
	height: max-content;
	color: var(--white-text-color);
	border-radius: 0.5rem;
	cursor: pointer;
`;

//FIM Portólio área

export const Services = styled.section`
	width: 100%;
	border-radius: 0.5rem;
	background-color: var(--white-background);
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
		background: var(--main-background-content);
		border-radius: 50%;
		transition: all ease 0.5s;

		:hover {
			background-color: var(--search-button-color);

			> svg {
				color: var(--white-text-color);
			}
		}
	}

	.service-title {
		font-size: 1.5rem;
		color: var(--title-color);
		font-weight: 700;
	}

	.service-description {
		font-size: 1.3rem;
		line-height: 2.4rem;
		text-align: center;
	}	

`;

//FIM Services área

//USER SIDEBAR (criar estilo aqui)

export const UserSidebar = styled.aside`
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		width: 100%;
		height: 100vh;
`;

export const UserSidebarContent = styled(WidgetUserInfo)`

	.aboutme-user-image {
		display: flex;
		justify-content: center;

		img {
			border-radius: 50%;
		}
	}

	h2.aboutme-username {
		text-align: center;
		padding: 2rem 1rem 0.5rem;
		color: var(--title-color);
		font-size: 2rem;
	}

	p.aboutme-user-job {
		text-align: center;
		font-size: 1.6rem;
	}

	.divider {
		width: 5rem;
		height: 0.4rem;
		background: var(--main-blue);
		margin: 2rem auto;
	}

	p.aboutme-description {
		font-size: 1.4rem;
		line-height: 2.4rem;
		text-align: center;
	}

`;