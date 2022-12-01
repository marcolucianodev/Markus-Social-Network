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

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  const handleActiveMenu = () => {
    setOpenMenu(!openMenu)
  }

  const getUsers = async () => {
      try {
          const response = await api_url.get(`/users/${id}`)
          const data = response.data

          const {name, nickname, images, classification, address, activity, project, skills, services, job, email, website, phone, textAbout, friendship} = data;

          const userList: any = {
              id,
              name,
              nickname,
              address,
              job,
              email,
              website,
              phone,
              textAbout,
              imageProfile: images.profile,
              imageCover: images.cover,
              rating: classification.rating,
              totalRatings: classification.totalRatings,
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
              // portfCover1: images.portfolio.portfolioCover.portfCover1,
              // portfCover2: images.portfolio.portfolioCover.portfCover2,
              // portfCover3: images.portfolio.portfolioCover.portfCover3,
              // portfDetail1: images.portfolio.portfolioDetail.portfDetail1,
              // portfDetail2: images.portfolio.portfolioDetail.portfDetail2,
              // portfDetail3: images.portfolio.portfolioDetail.portfDetail3,
              // serviceTitle1: services.serv1.servTitle,
              // serviceTitle2: services.serv2.servTitle,
              // serviceTitle3: services.serv3.servTitle,
              // serviceDesc1: services.serv1.servDesc,
              // serviceDesc2: services.serv2.servDesc,
              // serviceDesc3: services.serv3.servDesc,
              // serviceIcon1: services.serv1.servIcon,
              // serviceIcon2: services.serv2.servIcon,
              // serviceIcon3: services.serv3.servIcon,            

              portfolio: images.portfolio.map((item: any) => item),

              services: services.map((item: any) => item),

              friendship: friendship.map((item: any) => item),
          }

          console.log(userList.portfolio)

          setUserList(userList)

      } catch (error) {
          console.log(error)
      }
  }

  //Return of portfolioImages data
  const portfolioData = []
  for(let i in userList.portfolio) {
    portfolioData.push(
      <div className="portfolio-box">
        <PortfolioItem src={userList.portfolio[i].cover} />
        <div className="portfolio-links">
          <PortfolioItemLink><FaLink size="18" /></PortfolioItemLink>
          <PortfolioItemDetail onClick={handleModal}><FaEye size="18" /></PortfolioItemDetail>
          {openModal && 
            <Modal>
              <PortfolioDetails>
                <img src={userList.portfolio[i].detail} />
                <div className="portfolio-description">
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                  <IoClose size="20" onClick={handleModal} />
                </div>
              </PortfolioDetails>
            </Modal>
          }
        </div>
      </div>
    )
  }

  //Return of services data
  let servicesData = []
  for(let i in userList.services) {
    servicesData.push(
      <UserService 
        serviceIcon={userList.services[i].servIcon}
        serviceTitle={userList.services[i].servTitle}
        serviceDescription={userList.services[i].servDesc}
      />
    )
  }

  //Return of friends data
  let friendsData = []
  for(let i in userList.friendship) {
    friendsData.push(
      <MembersInfo 
        id={userList.id}
        image_profile={userList.friendship[i].imageProfile}
        name={userList.friendship[i].name} 
        hasNick
        nickname={userList.friendship[i].nickname}
      />
    )  
  }

  useEffect(() => {
    getUsers();
  }, [id])

  //group properties
  const groupName = group.map((group: GroupPropsTypes) => group.name);
  const groupStatus = group.map((group: GroupPropsTypes) => group.group_type);
  const groupImage = group.map((group: GroupPropsTypes) => group.imageGroup);

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
              {portfolioData}
            </PortfolioContent>
          </Portfolio>

          <Services>
            <UserSectionTitle><FaWrench /> Serviços</UserSectionTitle>
            <ServicesContent>
              {servicesData}
            </ServicesContent>
          </Services>

        </UserMainContent>
        <UserSidebar>
          <Sidebar>
            <WidgetTitle><PersonIcon /> <span>Sobre mim</span></WidgetTitle>
            <UserSidebarContent>
              <div className="aboutme-user-image">
                <img src={userList.imageProfile} alt={userList.name} />
              </div>
              <h2 className="aboutme-username">{userList.name}</h2>
              <p className="aboutme-user-job">{userList.job}</p>
              <div className="divider"></div>
              <p className="aboutme-description">{userList.textAbout}</p>
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
              {friendsData}
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