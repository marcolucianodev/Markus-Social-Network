import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { GroupContext } from "../../contexts/groupContext";
import { Link } from "react-router-dom";
import { 
  ContactsBox,
  Container, 
  HeaderInfo, 
  HeaderNetwork, 
  Portfolio, 
  PortfolioContent, 
  PortfolioItem, 
  PortfolioItemDetail, 
  PortfolioItemLink, 
  Project, 
  ProjectCategory, 
  ProjectContent, 
  ProjectDescription, 
  ProjectHead, 
  ProjectInfo, 
  ProjectLink, 
  ProjectTags, 
  ProjectTagsItems, 
  ProjectTemplate, 
  ProjectTitle, 
  ProjectType, 
  Service, 
  Services, 
  ServicesContent, 
  SkillBar, 
  SkillBarPercent, 
  SkillProgressBar, 
  SkillProgressBarContainer, 
  Skills, 
  UserContacts, 
  UserContent, 
  UserData, 
  UserHeader, 
  UserInfo, 
  UserMainContent, 
  UserProfileImage, 
  UserSectionTitle, 
  UserSidebar, 
  UserSidebarContent
} from "./styles";

import UserMenuList from "../../components/UserMenuList";

//menu icons
import PublicIcon from '@mui/icons-material/Public';
import InfoIcon from '@mui/icons-material/Info';
import GradingIcon from '@mui/icons-material/Grading';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import CommentIcon from '@mui/icons-material/Comment';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import ReviewsIcon from '@mui/icons-material/Reviews';

//sidebar icons
import PersonIcon from '@mui/icons-material/Person';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';

import templateCover from "../../components/_assets/img/img-testes/featured-project.jpg";
import portfolioItem1 from "../../components/_assets/img/img-testes/portf-01.jpg";
import portfolioItem2 from "../../components/_assets/img/img-testes/portf-02.jpg";
import portfolioItem3 from "../../components/_assets/img/img-testes/portf-03.jpg";

import portfolioImage1 from "../../components/_assets/img/img-testes/portfolio-image01.jpg";
import portfolioImage2 from "../../components/_assets/img/img-testes/portfolio-image02.jpg";
import portfolioImage3 from "../../components/_assets/img/img-testes/portfolio-image03.jpg";

import Slider from "../../components/Slider";
import { GroupPropsTypes, UserPropsTypes } from "../../types";

import { FcApproval } from "react-icons/fc";
import { ImLocation } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaStar, 
  FaTwitter, 
  FaLink, 
  FaEye,
  FaTags,
  FaWordpressSimple, 
  FaFileCode,
  FaSlidersH,
  FaWrench,
  FaCloud,
  FaTasks,
  FaFolderOpen,
  FaEnvelope,
  FaRegAddressCard,
  FaPhone,
} from "react-icons/fa";
import Modal from "../../components/Modal";
import { PortfolioDetails } from "../../components/Modal/styles";
import { Sidebar, WidgetTitle } from "../../components/Sidebar";
import { MembersInfo } from "../../components/MembersInfo";
import { GroupsInfo } from "../../components/GroupsInfo";

const User1 = () => {

  const [openModal, setOpenModal] = useState(false);

  const { user }: any = useContext(UserContext);
  const { group }: any = useContext(GroupContext);

  //user properties
  const userName = user.map((user: UserPropsTypes) => user.name);
  const userCover = user.map((user: UserPropsTypes) => user.image_cover);
  const userImageProfile = user.map((user: UserPropsTypes) => user.image_profile);
  const userRatings = user.map((user: UserPropsTypes) => user.rating);
  const userTotalRatings = user.map((user: UserPropsTypes) => user.total_ratings);
  const userNickname = user.map((user: UserPropsTypes) => user.nickname);

  //group properties
  const groupName = group.map((group: GroupPropsTypes) => group.name);
  const groupStatus = group.map((group: GroupPropsTypes) => group.group_type);
  const groupImage = group.map((group: GroupPropsTypes) => group.image_group);

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  const itemList = [
    {
      nameItem: 'Visão Geral',
      urlMenu: '/user1',
      iconItem: <PublicIcon />
    },
    {
      nameItem: 'Sobre',
      urlMenu: '/user2',
      iconItem: <InfoIcon />
    },
    {
      nameItem: 'Atividade',
      urlMenu: '/user2',
      iconItem: <GradingIcon />
    },
    {
      nameItem: 'Posts',
      urlMenu: '/user2',
      iconItem: <DynamicFeedIcon />
    },
    {
      nameItem: 'Comentários',
      urlMenu: '/user2',
      iconItem: <CommentIcon />
    },
    {
      nameItem: 'Amizades',
      urlMenu: '/user2',
      iconItem: <PeopleOutlineIcon />
    },
    {
      nameItem: 'Grupos',
      urlMenu: '/user2',
      iconItem: <GroupsIcon />
    },
    {
      nameItem: 'Avaliações',
      urlMenu: '/user2',
      iconItem: <ReviewsIcon />
    }
  ]

  return (
    <Container style={{marginTop:'70px'}}>
      <UserHeader coverHeader={userCover[0]}>
        <HeaderInfo>
          <UserData>
            <UserProfileImage>
              <img src={userImageProfile[0]} alt={userName[0]} />
            </UserProfileImage>
            <UserInfo>
              <div className="name">
                <h2>{userName[0]}</h2>
                <span>
                  <FcApproval size="24" />
                </span>
              </div>
              <div className="user-meta">
                <div className="user-meta-left">
                  <ImLocation size="16" /><span>Minas Gerais/MG</span>
                </div>
                <div className="user-meta-right">
                  <span>
                    <FaStar color="var(--main-yellow)" size="18" />
                    <FaStar color="var(--main-yellow)" size="18" />
                    <FaStar color="var(--main-yellow)" size="18" />
                    <FaStar color="var(--main-yellow)" size="18" />
                    <FaStar size="18" />
                  </span>
                  <span className="bullet-separator">•</span>
                  <span>{userRatings[0]} de 5</span>
                  <span className="bullet-separator">•</span>
                  <span>{userTotalRatings[0]} classificações</span>
                </div>
              </div>
            </UserInfo>
          </UserData>
        </HeaderInfo>
      </UserHeader>
      <HeaderNetwork>
        <div className="header-network-content">
          <div className="social-networks">
            <FaFacebookF size="20" color="var(--white-text-color)" className="facebook-icon" />
            <FaTwitter size="20" color="var(--white-text-color)" className="twitter-icon" />
            <FaInstagram size="20" color="var(--white-text-color)" className="instagram-icon" />
          </div>
          <div className="user-activities">
            <div className="posts-data">
              <span>21</span>
              <span>posts</span>
            </div>
            <div className="comments-data">
              <span>21</span>
              <span>comentários</span>
            </div>
            <div className="views-data">
              <span>103k</span>
              <span>vizualizações</span>
            </div>
          </div>
        </div>
      </HeaderNetwork>
      
      <UserMenuList itemList={itemList.map((item) => (
          <Link to={item.urlMenu}>
            <span className="user-menu-icon">{item.iconItem}</span>
            <span>{item.nameItem}</span>
          </Link>
        ))} 
      />
      
      <UserContent>
        <UserMainContent>

          <Slider />

          <Project>
           <UserSectionTitle><FaFolderOpen /> Projetos</UserSectionTitle>
           <ProjectContent>
            <ProjectTemplate 
              templateCover={templateCover}
            />
            <ProjectInfo>
              <ProjectHead>
                <ProjectType>
                  Projeto Destaque
                </ProjectType>
                <ProjectTitle>
                  Olympus - HTML Social Network Toolkit
                </ProjectTitle>
                <ProjectCategory>
                  <FaTags /> Web Design
                </ProjectCategory>
                <ProjectLink>
                  <FaLink /> <span>olympus-html-social-network-toolkit.com</span>
                </ProjectLink>
              </ProjectHead>
              <ProjectDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, illo consequatur ex provident veniam et soluta ratione accusantium, earum nesciunt culpa sint tenetur illum ipsa, obcaecati natus dolore aliquam tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis itaque beatae, facere blanditiis recusandae laborum tempore quae molestias aperiam? Cumque odit ducimus consequuntur deserunt itaque quisquam.
              </ProjectDescription>
              <ProjectTags>
                <ProjectTagsItems><span className="hastag">#</span> Templates</ProjectTagsItems>
                <ProjectTagsItems><span className="hastag">#</span> Webdesign</ProjectTagsItems>
                <ProjectTagsItems><span className="hastag">#</span> Html</ProjectTagsItems>
              </ProjectTags>
            </ProjectInfo>
           </ProjectContent>
          </Project>

          <Skills>

            <UserSectionTitle><FaTasks /> Skills</UserSectionTitle>
            
            <SkillProgressBarContainer>
              <SkillProgressBar>
                <SkillBar 
                  percentAnimation="82" 
                  skillBarBg="var(--first-skill-color)" 
                  skillBarWidth="82%"
                >
                  <span>PHP</span>
                </SkillBar>
                <SkillBarPercent>82%</SkillBarPercent>             
              </SkillProgressBar>

              <SkillProgressBar>
                <SkillBar 
                  percentAnimation="86" 
                  skillBarBg="var(--second-skill-color)" 
                  skillBarWidth="86%"
                >
                  <span>Javascript</span>
                </SkillBar>
                <SkillBarPercent>86%</SkillBarPercent>
              </SkillProgressBar>

              <SkillProgressBar>
                <SkillBar 
                  percentAnimation="98" 
                  skillBarBg="var(--third-skill-color)" 
                  skillBarWidth="98%"
                >
                  <span>CSS</span>
                </SkillBar>
                <SkillBarPercent percentColor>98%</SkillBarPercent>
              </SkillProgressBar>

              <SkillProgressBar>
                <SkillBar 
                  percentAnimation="100" 
                  skillBarBg="var(--fourth-skill-color)" 
                  skillBarWidth="100%"
                >
                  <span>HTML</span>
                </SkillBar>
                <SkillBarPercent percentColor>100%</SkillBarPercent>
              </SkillProgressBar>
            </SkillProgressBarContainer>

          </Skills>

          <Portfolio>
            <UserSectionTitle><FaCloud /> Portfólio</UserSectionTitle>
            <PortfolioContent>
              <div className="portfolio-box">
                <PortfolioItem src={portfolioItem1} />
                <div className="portfolio-links">
                  <PortfolioItemLink><FaLink size="18" /></PortfolioItemLink>
                  <PortfolioItemDetail onClick={handleModal}><FaEye size="18" /></PortfolioItemDetail>
                  {openModal && 
                    <Modal>
                      <PortfolioDetails>
                        <img src={portfolioImage1} />
                        <div className="portfolio-description">
                          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                          <IoClose size="20" onClick={handleModal} />
                        </div>
                      </PortfolioDetails>
                    </Modal>
                  }
                </div>
              </div>
              <div className="portfolio-box">
                <PortfolioItem src={portfolioItem2} />
                <div className="portfolio-links">
                  <PortfolioItemLink><FaLink size="18" /></PortfolioItemLink>
                  <PortfolioItemDetail onClick={handleModal}><FaEye size="18" /></PortfolioItemDetail>
                  {openModal && 
                    <Modal>
                      <PortfolioDetails>
                        <img src={portfolioImage2} />
                        <div className="portfolio-description">
                          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                          <IoClose size="20" onClick={handleModal} />
                        </div>
                      </PortfolioDetails>
                    </Modal>
                  }
                </div>
              </div>
              <div className="portfolio-box">
                <PortfolioItem src={portfolioItem3} />
                <div className="portfolio-links">
                  <PortfolioItemLink><FaLink size="18" /></PortfolioItemLink>
                  <PortfolioItemDetail onClick={handleModal}><FaEye size="18" /> </PortfolioItemDetail>
                  {openModal && 
                    <Modal>
                      <PortfolioDetails>
                        <img src={portfolioImage3} />
                        <div className="portfolio-description">
                          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                          <IoClose size="20" onClick={handleModal} />
                        </div>
                      </PortfolioDetails>
                    </Modal>
                  }
                </div>
              </div>
            </PortfolioContent>
          </Portfolio>

          <Services>
            <UserSectionTitle><FaWrench /> Serviços</UserSectionTitle>
            <ServicesContent>
              <Service>
                <div className="service-icon">
                  <FaWordpressSimple size="26" />
                </div>
                <div className="service-title">
                  WordPress Themes
                </div>
                <div className="service-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem saepe, eaque officia animi laudantium beatae necessitatibus eius quae sint, distinctio consectetur fuga alias, optio nostrum quas atque tempora porro?
                </div>
              </Service>
              <Service>
                <div className="service-icon">
                  <FaFileCode size="26" />
                </div>
                <div className="service-title">
                  HTML Templates
                </div>
                <div className="service-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem saepe, eaque officia animi laudantium beatae necessitatibus eius quae sint, distinctio consectetur fuga alias, optio nostrum quas atque tempora porro?
                </div>
              </Service>
              <Service>
                <div className="service-icon">
                  <FaSlidersH size="26" />
                </div>
                <div className="service-title">
                  Plugins Development
                </div>
                <div className="service-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem saepe, eaque officia animi laudantium beatae necessitatibus eius quae sint, distinctio consectetur fuga alias, optio nostrum quas atque tempora porro?
                </div>
              </Service>
            </ServicesContent>
          </Services>

        </UserMainContent>
        <UserSidebar>
          <Sidebar>
            <WidgetTitle><PersonIcon /> <span>Sobre mim</span></WidgetTitle>
            <UserSidebarContent>
              <div className="aboutme-user-image">
                <img src={userImageProfile[0]} alt={userName[0]} />
              </div>
              <h2 className="aboutme-username">{userName[0]}</h2>
              <p className="aboutme-user-job">developer</p>
              <div className="divider"></div>
              <p className="aboutme-description">
                We are a team of developers impassioned about creating quality and distinguished HTML and WordPress templates.
                Our goal is to combine professional code, preeminent design and user-friendly admin interface in each product. With more than 5 years of experience and about 20 products behind and more than 11k customers, we are full of ideas and energy for new projects and we know how to surprise you.
              </p>
            </UserSidebarContent>
          </Sidebar>

          <Sidebar>
            <WidgetTitle><MultipleStopIcon /> <span>Redes Sociais</span></WidgetTitle>
            <UserSidebarContent>
              <div className="social-media-boxes">
                <div className="facebook-box">
                  <FaFacebookF size="18" /> <span>Facebook</span>
                </div>
                <div className="twitter-box">
                  <FaTwitter size="18" /> <span>Twitter</span>
                </div>
                <div className="instagram-box">
                  <FaInstagram size="18" /> <span>Instagram</span>
                </div>
              </div>
            </UserSidebarContent>
          </Sidebar>

          <Sidebar>
            <WidgetTitle><PeopleOutlineIcon /> <span>Amigos</span></WidgetTitle>
            <UserSidebarContent>
              <MembersInfo 
                image_profile={userImageProfile[3]}
                name={userName[3]} 
                hasNick
                nickname={userNickname[3]}
              />
              <MembersInfo 
                image_profile={userImageProfile[2]}
                name={userName[2]} 
                hasNick
                nickname={userNickname[2]}
              />
              <MembersInfo 
                image_profile={userImageProfile[1]}
                name={userName[1]} 
                hasNick
                nickname={userNickname[1]}
              />
              <MembersInfo 
                image_profile={userImageProfile[4]}
                name={userName[4]} 
                hasNick
                nickname={userNickname[4]}
              /> 
            </UserSidebarContent>
          </Sidebar>

          <Sidebar>
            <WidgetTitle><GroupsIcon /> <span>Grupos</span></WidgetTitle>
            <UserSidebarContent>
              <GroupsInfo 
                group_name={groupName[3]}
                image_group={groupImage[3]}
                status_group={groupStatus[3]}
              />
              <GroupsInfo 
                group_name={groupName[0]}
                image_group={groupImage[0]}
                status_group={groupStatus[0]}
              />
              <GroupsInfo 
                group_name={groupName[1]}
                image_group={groupImage[1]}
                status_group={groupStatus[1]}
              />
            </UserSidebarContent>
          </Sidebar>

          <UserContacts>
            <ContactsBox contactsBg="var(--bg-dotted), var(--email-gradient-bg)">
              <div className="left">
                e-mail
              </div>
              <div className="right">
                <FaEnvelope size="20" />
                <p className="get-link">info@carlos.net</p>
              </div>
            </ContactsBox>

            <ContactsBox contactsBg="var(--bg-dotted), var(--address-gradient-bg)">
              <div className="left">
                endereço
              </div>
              <div className="right">
                <FaRegAddressCard size="20" />
                <p>Minas Gerais</p>
              </div>
            </ContactsBox>

            <ContactsBox contactsBg="var(--bg-dotted), var(--website-gradient-bg)">
              <div className="left">
                website
              </div>
              <div className="right">
                <FaLink size="20" />
                <p className="get-link">http://crumina.net</p>
              </div>
            </ContactsBox>

            <ContactsBox contactsBg="var(--bg-dotted), var(--phone-gradient-bg)">
              <div className="left">
                telefone
              </div>
              <div className="right">
                <FaPhone size="20" />
                <p>(00)99999-9999</p>
              </div>
            </ContactsBox>

            {/* <div className="user-email">
              <div className="left">
                e-mail
              </div>
              <div className="right">
                <FaEnvelope size="20" />
                <p className="get-link">info@carlos.net</p>
              </div>
            </div>
            <div className="user-address">
              <div className="left">
                endereço
              </div>
              <div className="right">
                <FaRegAddressCard size="20" />
                <p>Minas Gerais</p>
              </div>
            </div>
            <div className="user-website">
              <div className="left">
                website
              </div>
              <div className="right">
                <FaLink size="20" />
                <p className="get-link">http://crumina.net</p>
              </div>
            </div>
            <div className="user-phone">
              <div className="left">
                telefone
              </div>
              <div className="right">
                <FaPhone size="20" />
                <p>(00)99999-9999</p>
              </div>
            </div> */}
          </UserContacts>

        </UserSidebar>
      </UserContent>
    </Container>
  )
}

export default User1;