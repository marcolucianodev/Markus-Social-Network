import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  ContactsBox,
  Container, 
  HeaderInfo, 
  HeaderNetwork, 
  // Portfolio, 
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
  Services, 
  ServicesContent, 
  SkillBar, 
  SkillBarPercent, 
  SkillProgressBar, 
  SkillProgressBarContainer, 
  // Skills, 
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

// import Slider from "../../components/Slider";
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


import axios from "axios";
import { UserContext } from "../../contexts/userContext";
import Header from "./Header";
import Network from "./Network";
import Projects from "./Projects";
import Skills from "./Skills";
import Slider from "./Slider";
import Portfolio from "./Portfolio";

type UserProps = {
  id: any
}

const Users = () => {

  const { id }: any = useParams();

  const { user }: any = useContext(UserContext);

  const [userList, setUserList] = useState<any>([])

  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(true);

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  const handleActiveMenu = () => {
    setOpenMenu(!openMenu)
  }

  // const getUsers = async () => {
  //     try {
  //         const response = await api_url.get(`/users/${id}`)
  //         const data = response.data

  //         const {name, nickname, images, classification, address, activity, project, skills, services, job, email, website, phone, textAbout, friendship, activeGroups} = data;

  //         const userList: any = {
  //             id,
  //             name,
  //             nickname,
  //             address,
  //             job,
  //             email,
  //             website,
  //             phone,
  //             textAbout,
  //             imageProfile: images.profile,
  //             imageCover: images.cover,
  //             rating: classification.rating,
  //             totalRatings: classification.totalRatings,
  //             totPost: activity.totPosts,
  //             totComments: activity.totComments,
  //             totViews: activity.totViews,
  //             featuredProject: project.projectImage,
  //             projectName: project.projectName,
  //             projectUrl: project.projectUrl,
  //             projectDesc: project.projectDesc,
  //             projectCategory: project.projectCategory,
  //             projectTags: project.projectTags,
  //             sliders: images.slider.map((item: any) => item),
  //             skills: skills.map((item: any) => item),
  //             portfolio: images.portfolio.map((item: any) => item),
  //             services: services.map((item: any) => item),
  //             friendship: friendship.map((item: any) => item),
  //             groups: activeGroups.map((item: any) => item)
  //         }

  //         setUserList(userList)

  //     } catch (error) {
  //         console.log(error)
  //     }
  // }
  
  //Function that define color of skills bar
  // const skillColor = (colorValue: any) => {
  //   if(colorValue === userList.skills[0]) {
  //     return "var(--first-skill-color)"
  //   } else if (colorValue === userList.skills[1]) {
  //     return "var(--second-skill-color)"
  //   } else if (colorValue === userList.skills[2]) {
  //     return "var(--third-skill-color)"
  //   } else {
  //     return "var(--fourth-skill-color)"
  //   }
  // }

  // slider data
  // let sliderData = []
  // for(let i in userList.sliders) {
  //   sliderData.push(
  //     userList.sliders[i].imageSlider    )
  // }

  //portfolio tags data
  // let projectTagsData = [];
  // for(let i in userList.projectTags) {
  //   projectTagsData.push(
  //     <ProjectTagsItems id={userList.id}>
  //       <span className="hastag">#</span> {userList.projectTags[i]}
  //     </ProjectTagsItems>
  //   )
  // }

  //skills data
  // let skillsData = [];
  // for(let i in userList.skills) {
  //   skillsData.push(
  //     <SkillProgressBar key={userList.skills[i].id}>
  //       <SkillBar 
  //         skillBarBg={skillColor(userList.skills[i])} 
  //         skillBarWidth={`${userList.skills[i].percentage}%`}
  //       >
  //         <span>{userList.skills[i].name}</span>
  //       </SkillBar>
  //       <SkillBarPercent>
  //         {userList.skills[i].percentage}%
  //       </SkillBarPercent>             
  //     </SkillProgressBar>
  //   )
  // }

  //portfolio Images data
  // let portfolioData = []
  // for(let i in userList.portfolio) {
  //   portfolioData.push(
  //     <div className="portfolio-box" key={userList.portfolio[i].id}>
  //       <PortfolioItem src={userList.portfolio[i].cover} id={userList.id} />
  //       <div className="portfolio-links">
  //         <PortfolioItemLink><FaLink size="18" /></PortfolioItemLink>
  //         <PortfolioItemDetail onClick={handleModal}>
  //           <FaEye size="18" />
  //         </PortfolioItemDetail>
  //         {openModal && 
  //           <Modal>
  //             <PortfolioDetails id={userList.id}>
  //               <img src={userList.portfolio[i].detail} />
  //               <div className="portfolio-description">
  //                 <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
  //                 <IoClose size="20" onClick={handleModal} />
  //               </div>
  //             </PortfolioDetails>
  //           </Modal>
  //         }
  //       </div>
  //     </div>
  //   )
  // }

  //services data
  // let servicesData = []
  // for(let i in userList.services) {
  //   servicesData.push(
  //     <UserService 
  //       key={userList.services[i].id}
  //       serviceIcon={userList.services[i].servIcon}
  //       serviceTitle={userList.services[i].servTitle}
  //       serviceDescription={userList.services[i].servDesc}
  //     />
  //   )
  // }

  //friends data
  // let friendsData = []
  // for(let i in userList.friendship) {
  //   friendsData.push(
  //     <MembersInfo 
  //       id={userList.id}
  //       image_profile={userList.friendship[i].imageProfile}
  //       name={userList.friendship[i].name} 
  //       hasNick
  //       nickname={userList.friendship[i].nickname}
  //     />
  //   )  
  // }

  //groups data
  // let activesGroupsData = []
  // for(let i in userList.groups) {
  //   activesGroupsData.push(
  //     <GroupsInfo 
  //       key={userList.groups[i].name}
  //       group_name={userList.groups[i].name}
  //       image_group={userList.groups[i].imageGroup}
  //       status_group={userList.groups[i].type}
  //     />
  //   )
  // }

  // useEffect(() => {
  //   getUsers();
  // }, [id])

  // const getUsers = async () => {
  //   try {
  //     const response = await axios.get("/fake_API/db.json");
  //     const data = response.data.users

  //     setUserList(data)
  //     console.log(userList)
      
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const userName = userList.map((user: any) => user.name)
  // console.log(userName)

  // const headerData = []
  // for(let i in user) {
  //   headerData.push(
  //     <Header 
  //       imageProfile={user[i].images.profile}
  //       name={user[i].name}
  //       address={user[i].address}
  //       rating={user[i].classification.rating}
  //       totalRatings={user[i].classification.totalRatings}
  //       imageCover={user[i].images.cover}
  //     />
  //   )
  // }

  // const netWorkData = []
  // for(let i in user) {
  //   netWorkData.push(
  //     <Network 
  //       totalComments={user[i].activity.totPosts}
  //       totalPost={user[i].activity.totComments}
  //       totalViews={user[i].activity.totViews}
  //     />
  //   )
  // }

  // const sliders = user.map((item: any) => item.images.slider)

  //   let sliderData = []
  //   for(let i in sliders) {
  //     sliderData.push(
  //       sliders[i]
  //     )
  //   }
  //   console.log(sliderData[id])
  //   console.log(sliders.map((item: any) => item))


  return (
    <Container style={{marginTop:'70px'}}>

      <Header />

      <Network />
      
      {/* Menu */}
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

          <Slider />

          <Projects />

          <Skills />

          <Portfolio
            openModal={handleModal}
            modalIsActive={openModal}
          />

        </UserMainContent>
      </UserContent>
      
      {/* <UserContent>
        <UserMainContent>

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
              {activesGroupsData}
            </UserSidebarContent>
          </Sidebar>

          <UserContacts>
            <ContactsBox contactsBg="var(--bg-dotted), var(--email-gradient-bg)">
              <div className="left">
                e-mail
              </div>
              <div className="right">
                <FaEnvelope size="20" />
                <p className="get-link">{userList.email}</p>
              </div>
            </ContactsBox>

            <ContactsBox contactsBg="var(--bg-dotted), var(--address-gradient-bg)">
              <div className="left">
                endereço
              </div>
              <div className="right">
                <FaRegAddressCard size="20" />
                <p>{userList.address}</p>
              </div>
            </ContactsBox>

            <ContactsBox contactsBg="var(--bg-dotted), var(--website-gradient-bg)">
              <div className="left">
                website
              </div>
              <div className="right">
                <FaLink size="20" />
                <p className="get-link">{userList.website}</p>
              </div>
            </ContactsBox>

            <ContactsBox contactsBg="var(--bg-dotted), var(--phone-gradient-bg)">
              <div className="left">
                telefone
              </div>
              <div className="right">
                <FaPhone size="20" />
                <p>{userList.phone}</p>
              </div>
            </ContactsBox>
          </UserContacts>

        </UserSidebar>
      </UserContent> */}
    </Container>
  )
}

export default Users;