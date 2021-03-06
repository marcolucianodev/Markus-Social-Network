import React, { useState, useContext } from "react";
import { Container } from "./styles"
import { SearchActivity } from "../SearchActivity";
import { SearchActivityMobile, BoxActivityMobile } from "../SearchActivityMobile";
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import { ActivityOptions } from "../ActivityOptions";
import FormSearch from "../FormSearch";
import { FeedPost } from "../FeedPost";
import { NewFriendNotice } from "../NewFriendNotice";
import { UserPost } from "../UserPost";
import { Comments } from "../Comments";
import { Aside } from "../Aside";
import { UserContext } from '../../contexts/userContext';
import { GroupContext } from '../../contexts/groupContext';


const FeedContainer = () => {

    const { user } = useContext(UserContext);
    const { group } = useContext(GroupContext)

    //Constantes for users data
    const userName = user.map(user => user.name);
    const userImageProfile = user.map(user => user.image_profile);
    const userImageCover = user.map(user => user.image_cover);
    const userPostImage = user.map(user => user.post_image);
    //End Constantes user data

    //Constantes for group data
    const groupName = group.map(group => group.name);
    //End Constantes group data

    const [openSearchMobile, setOpenSearchMobile] = useState(false);

    const [openSettingsMobile, setOpenSettingsMobile] = useState(false);

    const [selectOption, setSelectOption] = useState(false);

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
                            <li>V??deos</li>
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
                    imgProfile={userImageProfile[0]} 
                    altTitle={userName[0]}
                    userName={userName[0]} 
                    friend={userName[3]}
                    ImgUserCover={userImageCover[3]}
                    ImgFriendsProfile={userImageProfile[3]}
                    postDate="Ontem"
                  />
                  <UserPost 
                    imgProfile={userImageProfile[2]} 
                    userName={userName[2]} 
                    groupName={groupName[0]}
                    textPost="Paris ?? maravilhosa n??o importa o que aconte??a ????"
                    coverPost={userPostImage[2]}
                    imgLikedUser1={userImageProfile[0]}
                    imgLikedUser2={userImageProfile[1]}
                    imgLikedUser3={userImageProfile[6]} 
                    postDate="10 dias atr??s"
                    commentsNumber="2 coment??rios"
                    comment={<Comments 
                      userImg={userImageProfile[0]} 
                      userName={userName[0]} 
                      postDate="8 dias atr??s" 
                      textComment="Muito lindo ????"  
                    />}
                    comment2={<Comments 
                      userImg={userImageProfile[6]} 
                      userName={userName[6]} 
                      postDate="5 dias atr??s" 
                      textComment="?? realmente uma dos melhores lugares que j?? vi. Muito bom!"  
                    />}
                  />
                  <UserPost 
                    imgProfile={userImageProfile[4]}
                    userName={userName[4]} 
                    groupName={groupName[5]}
                    textPost="Cl??ssicos imortais - ?? disso que eu gosto ????" 
                    coverPost={userPostImage[4]}
                    imgLikedUser1={userImageProfile[3]}
                    imgLikedUser2={userImageProfile[2]}
                    imgLikedUser3={userImageProfile[6]} 
                    postDate="1 m??s atr??s"
                    commentsNumber="2 coment??rios"
                    comment={<Comments 
                      userImg={userImageProfile[2]} 
                      userName={userName[2]} 
                      postDate="1 m??s atr??s" 
                      textComment="Melhor s??rie!!!"  
                    />}
                    comment2={<Comments 
                      userImg={userImageProfile[1]} 
                      userName={userName[1]} 
                      postDate="20 dias atr??s" 
                      textComment="Bora maratonar. Top d+"  
                    />}
                  />
                  <UserPost 
                    imgProfile={userImageProfile[6]}
                    userName={userName[6]} 
                    groupName={groupName[2]}
                    textPost="As melhores trilhas - ?? disso que eu gosto ????????" 
                    coverPost={userPostImage[6]}
                    imgLikedUser1={userImageProfile[3]}
                    imgLikedUser2={userImageProfile[5]}
                    imgLikedUser3={userImageProfile[0]} 
                    postDate="3 meses atr??s"
                    commentsNumber="1 coment??rio"
                    comment={<Comments 
                      userImg={userImageProfile[5]} 
                      userName={userName[5]} 
                      postDate="3 meses atr??s" 
                      textComment="Que vis??o hein... Lugar Top!!!"  
                    />}
                  />
                  <NewFriendNotice 
                    imgProfile={userImageProfile[5]} 
                    userName={userName[5]}
                    friend={userName[2]} 
                    ImgUserCover={userImageCover[2]}
                    ImgFriendsProfile={userImageProfile[2]}
                    postDate="3 meses atr??s" 
                  />
              </FeedPost>
              <Aside />
            </div>
         </Container>
    );
}

export default FeedContainer;