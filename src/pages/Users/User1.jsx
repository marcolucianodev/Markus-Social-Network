import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { 
  AutoNavigation,
  Container, 
  InputSlides, 
  ManualNavigation, 
  MenuList, 
  Project, 
  ProjectCategory, 
  ProjectContent, 
  ProjectData, 
  ProjectDescription, 
  ProjectHead, 
  ProjectInfo, 
  ProjectLink, 
  ProjectTags, 
  ProjectTemplate, 
  ProjectTitle, 
  ProjectType, 
  SkillBar, 
  SkillBarPercent, 
  SkillProgressBar, 
  Skills, 
  SlideItems, 
  // Slider, 
  Slides, 
  UserContent, 
  UserHeader, 
  UserMainContent, 
  UserMenu, 
  // UserMenuList, 
  UserSectionTitle, 
  UserSidebar 
} from "./styles";

import UserMenuList from "../../components/UserMenuList";

import PublicIcon from '@mui/icons-material/Public';
import InfoIcon from '@mui/icons-material/Info';
import GradingIcon from '@mui/icons-material/Grading';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import CommentIcon from '@mui/icons-material/Comment';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import ReviewsIcon from '@mui/icons-material/Reviews';

import imgSlider1 from "../../components/_assets/img/img-testes/slider-1.jpg"
import imgSlider2 from "../../components/_assets/img/img-testes/slider-2.jpg"
import imgSlider3 from "../../components/_assets/img/img-testes/slider-3.jpg";
import templateCover from "../../components/_assets/img/img-testes/featured-project.jpg"
import { ListItemIcon } from "@mui/material";
import Slider from "../../components/Slider";



const User1 = () => {

  const { user } = useContext(UserContext)

  const userName = user.map(user => user.name)

  const itemList = [
    {
      nameItem: 'Visão Geral',
      iconItem: <PublicIcon />
    },
    {
      nameItem: 'Sobre',
      iconItem: <InfoIcon />
    },
    {
      nameItem: 'Atividade',
      iconItem: <GradingIcon />
    },
    {
      nameItem: 'Posts',
      iconItem: <DynamicFeedIcon />
    },
    {
      nameItem: 'Comentários',
      iconItem: <CommentIcon />
    },
    {
      nameItem: 'Amizades',
      iconItem: <PeopleOutlineIcon />
    },
    {
      nameItem: 'Grupos',
      iconItem: <GroupsIcon />
    },
    {
      nameItem: 'Avaliações',
      iconItem: <ReviewsIcon />
    }
  ]

  return (
    <Container style={{marginTop:'70px'}}>
      <UserHeader>
        HEADER
      </UserHeader>
      
      <UserMenuList itemList={itemList.map((item) => (
          <>
            <span className="user-menu-icon">{item.iconItem}</span>
            <span>{item.nameItem}</span>
          </>
        ))} 
      />
      
      <UserContent>
        <UserMainContent>
          Página de {userName[0]}

          <Slider />

          <Project>
           <UserSectionTitle>Projetos</UserSectionTitle>
           <ProjectContent>
            <ProjectTemplate 
              template_cover={templateCover}
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
                  web design
                </ProjectCategory>
                <ProjectLink>
                  olympus-html-social-network-toolkit.com
                </ProjectLink>
              </ProjectHead>
              <ProjectDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, illo consequatur ex provident veniam et soluta ratione accusantium, earum nesciunt culpa sint tenetur illum ipsa, obcaecati natus dolore aliquam tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis itaque beatae, facere blanditiis recusandae laborum tempore quae molestias aperiam? Cumque odit ducimus consequuntur deserunt itaque quisquam nisi accusamus, expedita iusto.
              </ProjectDescription>
              <ProjectTags>
                <span>Template</span>
                <span>Web design</span>
                <span>html</span>
              </ProjectTags>
            </ProjectInfo>
           </ProjectContent>
          </Project>

          <Skills>
            <UserSectionTitle>Skills</UserSectionTitle>
            <SkillProgressBar>
              <SkillBar percentAnimation="82">
                <span>PHP</span>
              </SkillBar>
              <SkillBarPercent>82%</SkillBarPercent>             
            </SkillProgressBar>
          </Skills>

        </UserMainContent>
        <UserSidebar>
          Sidebar
        </UserSidebar>
      </UserContent>
    </Container>
  )
}

export default User1;