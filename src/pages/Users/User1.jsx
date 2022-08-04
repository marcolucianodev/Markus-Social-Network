import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { 
  AutoNavigation,
  Container, 
  InputSlides, 
  ManualNavigation, 
  MenuList, 
  SlideItems, 
  Slider, 
  Slides, 
  UserContent, 
  UserHeader, 
  UserMainContent, 
  UserMenu, 
  UserMenuList, 
  UserSidebar 
} from "./styles";
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
import imgSlider3 from "../../components/_assets/img/img-testes/slider-3.jpg"



const User1 = () => {

  const { user } = useContext(UserContext)

  const userName = user.map(user => user.name)

  return (
    <Container style={{marginTop:'70px'}}>
      <UserHeader>
        HEADER
      </UserHeader>
      <UserMenu>
        <UserMenuList>
          <MenuList>
            <li><PublicIcon className="user-menu-icon" /><span>Visão Geral</span></li>
            <li><InfoIcon className="user-menu-icon" /><span>Sobre</span></li>
            <li><GradingIcon className="user-menu-icon" /><span>Atividade</span></li>
            <li><DynamicFeedIcon className="user-menu-icon" /><span>Posts</span></li>
            <li><CommentIcon className="user-menu-icon" /><span>Comentários</span></li>
            <li><PeopleOutlineIcon className="user-menu-icon" /><span>Amizades</span></li>
            <li><GroupsIcon className="user-menu-icon" /><span>Grupos</span></li>
            <li><ReviewsIcon className="user-menu-icon" /><span>Avaliações</span></li>
          </MenuList>
        </UserMenuList>
      </UserMenu>
      <UserContent>
        <UserMainContent>
          Página de {userName[0]}
          <Slider>
          
          {/* Define tamanho da área onde vai conter o conteúdo do slider (midia/texto) */}
          <Slides>
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />

            {/* <InputSlides type="radio" name="radio-btn" id="radio1" />
            <InputSlides type="radio" name="radio-btn" id="radio2" />
            <InputSlides type="radio" name="radio-btn" id="radio3" /> */}

            {/* <input type="radio" name="radio-btn" id="radio1">
            <input type="radio" name="radio-btn" id="radio2">
            <input type="radio" name="radio-btn" id="radio3">
            <input type="radio" name="radio-btn" id="radio4"> */}
            <SlideItems className="first">
              <img src={imgSlider1} alt="Slider1" />
            </SlideItems>

            <SlideItems>
              <img src={imgSlider2} alt="Slider2" />
            </SlideItems>

            <SlideItems>
              <img src={imgSlider3} alt="Slider3" />
            </SlideItems>

            <SlideItems>
              <img src={imgSlider2} alt="Slider4" />
            </SlideItems>

            {/* Navegação onde define os checked quando cada slide estiver ativo */}
            <AutoNavigation>
              <div className="btn-auto1"></div>
              <div className="btn-auto2"></div>
              <div className="btn-auto3"></div>
              <div className="btn-auto4"></div>
            </AutoNavigation>


          </Slides>

          {/* Div responsável por criar os bullets de navegação dos slides */}

          <ManualNavigation>
            <label for="radio1" className="btn-manual"></label>
            <label for="radio2" className="btn-manual"></label>
            <label for="radio3" className="btn-manual"></label>
            <label for="radio4" className="btn-manual"></label>
          </ManualNavigation>

          {/* <div class="slides">

            

            <div class="slide-item first">
              <img src="../assets/imagens/slider-1.jpg">
            </div>
            <div class="slide-item">
              <img src="../assets/imagens/slider-2.jpg">
            </div>
            <div class="slide-item">
              <img src="../assets/imagens/slider-3.jpg">
            </div>
            <div class="slide-item">
              <img src="../assets/imagens/slider-4.jpg">
            </div>

            {/* Navegação onde define os checked quando cada slide estiver ativo */}
            {/* <div class="auto-navigation">
              <div class="btn-auto1"></div>
              <div class="btn-auto2"></div>
              <div class="btn-auto3"></div>
              <div class="btn-auto4"></div>
            </div>

          </div> */}

          {/* Div responsável por criar os bullets de navegação dos slides
          <div class="manual-navigation">
            <label for="radio1" class="btn-manual"></label>
            <label for="radio2" class="btn-manual"></label>
            <label for="radio3" class="btn-manual"></label>
            <label for="radio4" class="btn-manual"></label>
          </div> */}
          </Slider>
        </UserMainContent>
        <UserSidebar>
          Sidebar
        </UserSidebar>
      </UserContent>
    </Container>
  )
}

export default User1;