import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { GroupContext } from "../../contexts/groupContext";
import { Link, useParams } from "react-router-dom";
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
  // Service, 
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

//sidebar icons
import PersonIcon from '@mui/icons-material/Person';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import GroupsIcon from '@mui/icons-material/Groups';

// import templateCover from "../../components/_assets/img/img-testes/featured-project.jpg";
// import portfolioItem1 from "../../components/_assets/img/img-testes/portf-01.jpg";
// import portfolioItem2 from "../../components/_assets/img/img-testes/portf-02.jpg";
// import portfolioItem3 from "../../components/_assets/img/img-testes/portf-03.jpg";

// import portfolioImage1 from "../../components/_assets/img/img-testes/portfolio-image01.jpg";
// import portfolioImage2 from "../../components/_assets/img/img-testes/portfolio-image02.jpg";
// import portfolioImage3 from "../../components/_assets/img/img-testes/portfolio-image03.jpg";

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
  // FaWordpressSimple, 
  // FaFileCode,
  // FaSlidersH,
  FaWrench,
  FaCloud,
  FaTasks,
  FaFolderOpen,
  FaEnvelope,
  FaRegAddressCard,
  FaPhone,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import Modal from "../../components/Modal";
import { PortfolioDetails } from "../../components/Modal/styles";
import { Sidebar, WidgetTitle } from "../../components/Sidebar";
import { MembersInfo } from "../../components/MembersInfo";
import { GroupsInfo } from "../../components/GroupsInfo";
import { List, MenuList, UserMenu, UserMenuContainer, UserMenuListMobile, UserMenuMobile } from "../../components/UserMenuList/styles";

import { menuItem } from "../../config/menuItem";

import api_url from "../../config/config";
import UserService from "../../components/UserService";

const User1 = () => {

  const { id } = useParams();

  const [userList, setUserList] = useState<any>([])

  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(true);

  const { user }: any = useContext(UserContext);
  const { group }: any = useContext(GroupContext);


const getUsers = async () => {
    try {
        const response = await api_url.get(`/users/${id}`)
        const data = response.data

        const {name, nickname, images, classification, address, activity, project, skills, services} = data;

        const userList: any = {
            id,
            name,
            nickname,
            imageProfile: images.profile,
            imageCover: images.cover,
            rating: classification.rating,
            totalRatings: classification.totalRatings,
            address,
            totPost: activity.totPosts,
            totComments: activity.totComments,
            totViews: activity.totViews,
            slider1: images.slider.sliderImage1,
            slider2: images.slider.sliderImage2,
            slider3: images.slider.sliderImage3,
            featuredProject: project.projectImage,
            projectName: project.projectName,
            projectUrl: project.projectUrl,
            projectDesc: project.projectDesc,
            skill1Name: skills.skill1.nameSkill,
            skill2Name: skills.skill2.nameSkill,
            skill3Name: skills.skill3.nameSkill,
            skill4Name: skills.skill4.nameSkill,
            skill1Percent: skills.skill1.percentSkill,
            skill2Percent: skills.skill2.percentSkill,
            skill3Percent: skills.skill3.percentSkill,
            skill4Percent: skills.skill4.percentSkill,
            portfCover1: images.portfolio.portfolioCover.portfCover1,
            portfCover2: images.portfolio.portfolioCover.portfCover2,
            portfCover3: images.portfolio.portfolioCover.portfCover3,
            portfDetail1: images.portfolio.portfolioDetail.portfDetail1,
            portfDetail2: images.portfolio.portfolioDetail.portfDetail2,
            portfDetail3: images.portfolio.portfolioDetail.portfDetail3,
            serviceTitle1: services.serv1.servTitle,
            serviceTitle2: services.serv2.servTitle,
            serviceTitle3: services.serv3.servTitle,
            serviceDesc1: services.serv1.servDesc,
            serviceDesc2: services.serv2.servDesc,
            serviceDesc3: services.serv3.servDesc,
            serviceIcon1: services.serv1.servIcon,
            serviceIcon2: services.serv2.servIcon,
            serviceIcon3: services.serv3.servIcon
        }

        setUserList(userList)

    } catch (error) {
        console.log(error)
    }
}

  useEffect(() => {
    getUsers();
  }, [id])

  //user properties
  const userId = user.map((user: UserPropsTypes) => user.id);
  const userName = user.map((user: UserPropsTypes) => user.name);
  const userCover = user.map((user: UserPropsTypes) => user.image_cover);
  const userImageProfile = user.map((user: UserPropsTypes) => user.image_profile);
  const userRatings = user.map((user: UserPropsTypes) => user.rating);
  const userTotalRatings = user.map((user: UserPropsTypes) => user.total_ratings);
  const userNickname = user.map((user: UserPropsTypes) => user.nickname);

  //group properties
  const groupName = group.map((group: GroupPropsTypes) => group.name);
  const groupStatus = group.map((group: GroupPropsTypes) => group.group_type);
  const groupImage = group.map((group: GroupPropsTypes) => group.imageGroup);

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  const handleActiveMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <Container style={{marginTop:'70px'}}>
      <UserHeader coverHeader={userList.imageCover}>
        <HeaderInfo>
          <UserData>
            <UserProfileImage>
              <img src={userList.imageProfile} alt={userList.name} />
            </UserProfileImage>
            <UserInfo>
              <div className="name">
                <h2>{userList.name}</h2>
                <span>
                  <FcApproval size="24" />
                </span>
              </div>
              <div className="user-meta">
                <div className="user-meta-left">
                  <ImLocation size="16" /><span>{userList.address}</span>
                </div>
                <div className="user-meta-right">
                  <span>
                    <FaStar color="var(--main-yellow)" size="18" />
                    <FaStar color="var(--main-yellow)" size="18" />
                    <FaStar color="var(--main-yellow)" size="18" />
                    <FaStar color="var(--main-yellow)" size="18" />
                    <FaStar size="18" />
                  </span>
                  <span className="bullet-separator first-bullet">•</span>
                  <div className="ratings-info">
                    <span>{userList.rating} de 5</span>
                    <span className="bullet-separator">•</span>
                    <span>{userList.totalRatings} classificações</span>
                  </div>
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
              <span>{userList.totPost}</span>
              <span>posts</span>
            </div>
            <div className="comments-data">
              <span>{userList.totComments}</span>
              <span>comentários</span>
            </div>
            <div className="views-data">
              <span>{userList.totViews}</span>
              <span>vizualizações</span>
            </div>
          </div>
        </div>
      </HeaderNetwork>
      
      <UserMenuContainer>
        <UserMenu>
          <MenuList>
            {menuItem.map((item) => (
              <List  key={item.id}>
                <Link to={item.urlMenu}>
                  <span className="user-menu-icon">{item.iconItem}</span>
                  <span>{item.nameItem}</span>
                </Link>
              </List>
            ))}
          </MenuList>
        </UserMenu>
      </UserMenuContainer>

      {/* Menu Mobile */}

      <UserMenuListMobile>
        <UserMenuMobile>
          <span className="close-user-menu-mobile">{openMenu ? <FaBars size="24" onClick={handleActiveMenu} /> : <FaTimes  size="24" onClick={handleActiveMenu} />}</span>
          <ul className={openMenu ? "user-menu-list-closed" : "user-menu-list"}>
            {menuItem.map((item) => (
              <li key={item.id}>
                <Link to={item.urlMenu}>
                  <span className="user-menu-icon">{item.iconItem}</span>
                  <span>{item.nameItem}</span>
                </Link>
              </li>
            ))}
          </ul>
        </UserMenuMobile>
      </UserMenuListMobile>
      
      <UserContent>
        <UserMainContent>

          <Slider
            imgSlider1={userList.slider1}
            imgSlider2={userList.slider2}
            imgSlider3={userList.slider3}
          />

          <Project>
           <UserSectionTitle><FaFolderOpen /> Projetos</UserSectionTitle>
           <ProjectContent>
            <ProjectTemplate 
              templateCover={userList.featuredProject}
            />
            <ProjectInfo>
              <ProjectHead>
                <ProjectType>
                  Projeto Destaque
                </ProjectType>
                <ProjectTitle>
                  {userList.projectName}
                </ProjectTitle>
                <ProjectCategory>
                  <FaTags /> Web Design
                </ProjectCategory>
                <ProjectLink>
                  <FaLink /> <span>{userList.projectUrl}</span>
                </ProjectLink>
              </ProjectHead>
              <ProjectDescription>
                {userList.projectDesc}
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
                  // percentAnimation={userList.skill1Percent} 
                  skillBarBg="var(--first-skill-color)" 
                  skillBarWidth={`${userList.skill1Percent}%`}
                >
                  <span>{userList.skill1Name}</span>
                </SkillBar>
                <SkillBarPercent>{userList.skill1Percent}%</SkillBarPercent>             
              </SkillProgressBar>

              <SkillProgressBar>
                <SkillBar 
                  // percentAnimation={userList.skill2Percent} 
                  skillBarBg="var(--second-skill-color)" 
                  skillBarWidth={`${userList.skill2Percent}%`}
                >
                  <span>{userList.skill2Name}</span>
                </SkillBar>
                <SkillBarPercent>{userList.skill2Percent}%</SkillBarPercent>
              </SkillProgressBar>

              <SkillProgressBar>
                <SkillBar 
                  // percentAnimation={userList.skill3Percent} 
                  skillBarBg="var(--third-skill-color)" 
                  skillBarWidth={`${userList.skill3Percent}%`}
                >
                  <span>{userList.skill3Name}</span>
                </SkillBar>
                <SkillBarPercent percentColor>{userList.skill3Percent}%</SkillBarPercent>
              </SkillProgressBar>

              <SkillProgressBar>
                <SkillBar 
                  // percentAnimation={userList.skill4Percent} 
                  skillBarBg="var(--fourth-skill-color)" 
                  skillBarWidth={`${userList.skill4Percent}%`}
                >
                  <span>{userList.skill4Name}</span>
                </SkillBar>
                <SkillBarPercent percentColor>{userList.skill4Percent}%</SkillBarPercent>
              </SkillProgressBar>
            </SkillProgressBarContainer>

          </Skills>

          <Portfolio>
            <UserSectionTitle><FaCloud /> Portfólio</UserSectionTitle>
            <PortfolioContent>
              <div className="portfolio-box">
                <PortfolioItem src={userList.portfCover1} />
                <div className="portfolio-links">
                  <PortfolioItemLink><FaLink size="18" /></PortfolioItemLink>
                  <PortfolioItemDetail onClick={handleModal}><FaEye size="18" /></PortfolioItemDetail>
                  {openModal && 
                    <Modal>
                      <PortfolioDetails>
                        <img src={userList.portfDetail1} />
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
                <PortfolioItem src={userList.portfCover2} />
                <div className="portfolio-links">
                  <PortfolioItemLink><FaLink size="18" /></PortfolioItemLink>
                  <PortfolioItemDetail onClick={handleModal}><FaEye size="18" /></PortfolioItemDetail>
                  {openModal && 
                    <Modal>
                      <PortfolioDetails>
                        <img src={userList.portfDetail2} />
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
                <PortfolioItem src={userList.portfCover3} />
                <div className="portfolio-links">
                  <PortfolioItemLink><FaLink size="18" /></PortfolioItemLink>
                  <PortfolioItemDetail onClick={handleModal}><FaEye size="18" /> </PortfolioItemDetail>
                  {openModal && 
                    <Modal>
                      <PortfolioDetails>
                        <img src={userList.portfDetail3} />
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
              {/* <Service>
                <div className="service-icon">
                  <FaWordpressSimple size="26" />
                </div>
                <div className="service-title">
                  {userList.serviceTitle1}
                </div>
                <div className="service-description">
                  {userList.serviceDesc1}
                </div>
              </Service>
              <Service>
                <div className="service-icon">
                  <FaFileCode size="26" />
                </div>
                <div className="service-title">
                  {userList.serviceTitle2}
                </div>
                <div className="service-description">
                  {userList.serviceDesc2}
                </div>
              </Service>
              <Service>
                <div className="service-icon">
                  <FaSlidersH size="26" />
                </div>
                <div className="service-title">
                  {userList.serviceTitle3}
                </div>
                <div className="service-description">
                  {userList.serviceDesc3}
                </div>
              </Service> */}

              {/* {user.map((user: any) => (
                <UserService 
                  serviceIcon={user.services.servIcon}
                  serviceTitle={user.services.serv1.servTitle}
                  serviceDescription={user.services.serv1.servDesc}
                />
              ))} */}

              <UserService 
                // serviceIcon={<FaWordpressSimple size="26" />}
                serviceIcon={userList.serviceIcon1}
                serviceTitle={userList.serviceTitle1}
                serviceDescription={userList.serviceDesc1}
              />
              <UserService 
                // serviceIcon={<FaWordpressSimple size="26" />}
                serviceIcon={userList.serviceIcon2}
                serviceTitle={userList.serviceTitle2}
                serviceDescription={userList.serviceDesc2}
              />
              <UserService 
                // serviceIcon={<FaWordpressSimple size="26" />}
                serviceIcon={userList.serviceIcon3}
                serviceTitle={userList.serviceTitle3}
                serviceDescription={userList.serviceDesc3}
              />
            </ServicesContent>
          </Services>

        </UserMainContent>
        <UserSidebar>
          <Sidebar>
            <WidgetTitle><PersonIcon /> <span>Sobre mim</span></WidgetTitle>
            <UserSidebarContent>
              <div className="aboutme-user-image">
                <img src={userList.image_profile} alt={userList.name} />
              </div>
              <h2 className="aboutme-username">{userList.name}</h2>
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
                id={userId[3]}
                image_profile={userImageProfile[3]}
                name={userName[3]} 
                hasNick
                nickname={userNickname[3]}
              />
              <MembersInfo 
                id={userId[2]}
                image_profile={userImageProfile[2]}
                name={userName[2]} 
                hasNick
                nickname={userNickname[2]}
              />
              <MembersInfo 
                id={userId[1]}
                image_profile={userImageProfile[1]}
                name={userName[1]} 
                hasNick
                nickname={userNickname[1]}
              />
              <MembersInfo 
                id={userId[4]}
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
          </UserContacts>

        </UserSidebar>
      </UserContent>
    </Container>
  )
}

export default User1;