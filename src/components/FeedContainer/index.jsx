import React, { useState } from "react";
import { Container } from "./styles"
import { SearchActivity } from "../SearchActivity";
import { SearchActivityMobile, BoxActivityMobile } from "../SearchActivityMobile";
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
// import PublicIcon from '@mui/icons-material/Public';
import { ActivityOptions } from "../ActivityOptions";
import FormSearch from "../FormSearch";
import { FeedPost } from "../FeedPost";
import { NewFriendNotice } from "../NewFriendNotice";
import { UserPost } from "../UserPost";
import ImgUser1  from '../_assets/img/user-1.jpg';
import ImgUser2 from '../_assets/img/user-2.jpg';
import ImgUser3 from '../_assets/img/user-3.jpg';
import ImgUser4 from '../_assets/img/user-4.jpg';
import ImgUser5 from '../_assets/img/user-5.jpg';
import ImgUser6 from '../_assets/img/user-6.jpg';
import ImgUser7 from '../_assets/img/user-7.jpg';
import CoverNewFriend1 from '../_assets/img/user-cover.jpg';
import CoverNewFriend2 from '../_assets/img/user-cover2.png';
import CoverPost from '../_assets/img/bg-paris.jpg';
import CoverPost2 from '../_assets/img/bg-LaCasaDePapel.png';
import CoverPost3 from '../_assets/img/bg-trilhas.jpg';
import UserLikedImg1 from '../_assets/img/user-1.jpg';
import UserLikedImg2 from '../_assets/img/user-2.jpg';
import UserLikedImg3 from '../_assets/img/user-3.jpg';
import UserLikedImg4 from '../_assets/img/user-4.jpg';
import UserLikedImg5 from '../_assets/img/user-5.jpg';
import UserLikedImg7 from '../_assets/img/user-7.jpg';
import { Comments } from "../Comments";
import { Aside } from "../Aside";



const FeedContainer = () => {

    // const [openMenuMobile, setOpenMenuMobile] = useState(false);

    const [openSearchMobile, setOpenSearchMobile] = useState(false);

    const [openSettingsMobile, setOpenSettingsMobile] = useState(false);

    const [selectOption, setSelectOption] = useState(false);


    // const openActivityMenuMobile = () => {
    //     setOpenMenuMobile(!openMenuMobile)
    // }

    const openActivitySearchMobile = () => {
        setOpenSearchMobile(!openSearchMobile)
    }

    const openActivitySettingsMobile = () => {
        setOpenSettingsMobile(!openSettingsMobile)
    }

    const handleActiveSelect = () => {
        setSelectOption(!selectOption)
    }

    return (
        <Container>
            <div className="feed-content-search-activity">
                <SearchActivity />
            </div>
            <div className="feed-content-search-activity-mobile">
                <SearchActivityMobile>
                    {/* <BoxActivityMobile onClick={openActivityMenuMobile}>
                        <MenuIcon />
                        <p>Menu</p>
                    </BoxActivityMobile> */}
                    <BoxActivityMobile onClick={openActivitySearchMobile}>
                        <SearchIcon />
                        <p>Pesquisar</p>
                    </BoxActivityMobile>
                    <BoxActivityMobile onClick={openActivitySettingsMobile}>
                        <TuneIcon />
                        <p>Filtrar</p>
                    </BoxActivityMobile>
                </SearchActivityMobile>
            </div>

            {/*Menu Activity Options*/}
            {/* <div className={openMenuMobile ? 'content-activity-menu' : 'content-activity-menu-none'}>
                <div className="content-options-mobile">
                <div className="display-menbers-number">
                    <PublicIcon />
                    <span>Total de Usuários</span>
                    <span className="number-of-members">7</span>
                </div>
                </div>
            </div> */}

            {/*Settings Activity Options*/}
            <div className={openSettingsMobile ? 'content-activity-settings' : 'content-activity-settings-none'}>
                <div className="content-options-mobile">
                    <div className="filter-box">Filtrar Atividades Por:</div>
                    <div className="activity-select">
                        <div className="activity-select-headline" onClick={handleActiveSelect}>
                            <span className="headline-text">Tudo</span>
                            <span className="headline-icon">&#8249;</span>
                        </div>
                        <ul className={selectOption ? 'activity-select-options' : 'activity-select-options-none'}>
                            <li>Tudo</li>
                            <li>Status</li>
                            <li>Fotos</li>
                            <li>Vídeos</li>
                            <li>Audios</li>
                            <li>Links</li>
                            <li>Arquivos</li>
                            <li>Novos Membros</li>
                            <li>Amizades</li>
                            <li>Novos Grupos</li>
                            <li>Membros de Grupos</li>
                        </ul>
                    </div>
                </div>
            </div>

            <ActivityOptions className={openSearchMobile ? 'content-activity-search' : 'content-activity-search-none'}>
              <div className="content-options-mobile">
                <FormSearch>
                  <div className="activity-input-area">
                    <input type="text" name="search" id="form-search" placeholder="Procurar Atividades..."/>
                  </div>
                  <button className="search-button">
                    <SearchIcon className="icon-search"/>
                  </button>
                </FormSearch>
              </div>
            </ActivityOptions>

            <div className="feed-content-container">
              <FeedPost>
                  <NewFriendNotice 
                    imgProfile={ImgUser1} 
                    userName="Carlos" 
                    friend="Thalles" 
                    ImgUserCover={CoverNewFriend1}
                    ImgFriendsProfile={ImgUser2}
                    postYear="Ontem"
                  />
                  <UserPost 
                    imgProfile={ImgUser3} 
                    userName="Michelle" 
                    groupName="Destinos Turísticos"
                    textPost="Paris é maravilhosa não importa o que aconteça 😃"
                    coverPost={CoverPost}
                    imgLikedUser1={UserLikedImg1}
                    imgLikedUser2={UserLikedImg7}
                    imgLikedUser3={UserLikedImg5} 
                    postYear="10 dias atrás"
                    commentsNumber="2 comentários"
                    comment={<Comments 
                      userImg={ImgUser1} 
                      userName="Carlos" 
                      postDate="8 dias atrás" 
                      textComment="Muito lindo 😍"  
                    />}
                    comment2={<Comments 
                      userImg={ImgUser5} 
                      userName="Ricardo" 
                      postDate="5 dias atrás" 
                      textComment="É realmente uma dos melhores lugares que já vi. Muito bom!"  
                    />}
                  />
                  <UserPost 
                    imgProfile={ImgUser6}
                    userName="Cíntia" 
                    groupName="Melhores Séries"
                    textPost="Clássicos imortais - é disso que eu gosto 🤩" 
                    coverPost={CoverPost2}
                    imgLikedUser1={UserLikedImg2}
                    imgLikedUser2={UserLikedImg3}
                    imgLikedUser3={UserLikedImg5} 
                    postYear="1 mês atrás"
                    commentsNumber="2 comentários"
                    comment={<Comments 
                      userImg={ImgUser3} 
                      userName="Michelle" 
                      postDate="1 mês atrás" 
                      textComment="Melhor série!!!"  
                    />}
                    comment2={<Comments 
                      userImg={ImgUser7} 
                      userName="Daniel" 
                      postDate="20 dias atrás" 
                      textComment="Bora maratonar. Top d+"  
                    />}
                  />
                  <UserPost 
                    imgProfile={ImgUser5}
                    userName="Ricardo" 
                    groupName="Rotas de Trilhas"
                    textPost="As melhores trilhas - é disso que eu gosto 🏃🏻" 
                    coverPost={CoverPost3}
                    imgLikedUser1={UserLikedImg2}
                    imgLikedUser2={UserLikedImg4}
                    imgLikedUser3={UserLikedImg1} 
                    postYear="3 meses atrás"
                    commentsNumber="1 comentário"
                    comment={<Comments 
                      userImg={ImgUser4} 
                      userName="Antônio" 
                      postDate="3 meses atrás" 
                      textComment="Que visão hein... Lugar Top!!!"  
                    />}
                  />
                  <NewFriendNotice 
                    imgProfile={ImgUser4} 
                    userName="Antônio" 
                    friend="Michelle" 
                    ImgUserCover={CoverNewFriend2}
                    ImgFriendsProfile={ImgUser3}
                    postYear="3 meses atrás" 
                  />
              </FeedPost>
              <Aside />
            </div>
         </Container>
    );
}

export default FeedContainer;