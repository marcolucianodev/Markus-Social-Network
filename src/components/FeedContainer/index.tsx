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
import { GroupPropsTypes, UserPropsTypes } from "../../types";


const FeedContainer = () => {

    const { user }: any = useContext(UserContext);
    const { group }: any = useContext(GroupContext)

    //Constantes for users data
    const userName = user.map((user: UserPropsTypes) => user.name);
    const userImageProfile = user.map((user: UserPropsTypes) => user.image_profile);
    const userImageCover = user.map((user: UserPropsTypes) => user.image_cover);
    const userPostImage = user.map((user: UserPropsTypes) => user.post_image);
    //End Constantes user data

    //Constantes for group data
    const groupName = group.map((group: GroupPropsTypes) => group.name);
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
                {/* <FormSearch>
                  <div className="activity-input-area">
                    <input 
                      type="text" 
                      name="search" 
                      id="form-search" 
                      placeholder="Procurar Atividades..."/>
                  </div>
                  <button className="search-button">
                    <SearchIcon className="icon-search"/>
                  </button>
                </FormSearch> */}
                <FormSearch placeholderText="Procurar Atividades..." />
              </div>
            </ActivityOptions>

            <div className="feed-content-container">
              <FeedPost>
                  <NewFriendNotice 
                    imgProfile={userImageProfile[0]} 
                    altTitle={userName[0]}
                    userName={userName[0]} 
                    friend={userName[3]}
                    imgUserCover={userImageCover[3]}
                    imgFriendsProfile={userImageProfile[3]}
                    postDate="Ontem"
                  />
                  <UserPost 
                    imgProfile={userImageProfile[2]} 
                    userName={userName[2]} 
                    groupName={groupName[0]}
                    textPost="Paris é maravilhosa não importa o que aconteça 😃"
                    coverPost={userPostImage[2]}
                    imgLikedUser1={userImageProfile[0]}
                    imgLikedUser2={userImageProfile[1]}
                    imgLikedUser3={userImageProfile[6]} 
                    postDate="10 dias atrás"
                    commentsNumber="2 comentários"
                    comment={<Comments 
                      userImg={userImageProfile[0]} 
                      userName={userName[0]} 
                      postDate="8 dias atrás" 
                      textComment="Muito lindo 😍"  
                    />}
                    comment2={<Comments 
                      userImg={userImageProfile[6]} 
                      userName={userName[6]} 
                      postDate="5 dias atrás" 
                      textComment="É realmente uma dos melhores lugares que já vi. Muito bom!"  
                    />}
                  />
                  <UserPost 
                    imgProfile={userImageProfile[4]}
                    userName={userName[4]} 
                    groupName={groupName[5]}
                    textPost="Clássicos imortais - é disso que eu gosto 🤩" 
                    coverPost={userPostImage[4]}
                    imgLikedUser1={userImageProfile[3]}
                    imgLikedUser2={userImageProfile[2]}
                    imgLikedUser3={userImageProfile[6]} 
                    postDate="1 mês atrás"
                    commentsNumber="2 comentários"
                    comment={<Comments 
                      userImg={userImageProfile[2]} 
                      userName={userName[2]} 
                      postDate="1 mês atrás" 
                      textComment="Melhor série!!!"  
                    />}
                    comment2={<Comments 
                      userImg={userImageProfile[1]} 
                      userName={userName[1]} 
                      postDate="20 dias atrás" 
                      textComment="Bora maratonar. Top d+"  
                    />}
                  />
                  <UserPost 
                    imgProfile={userImageProfile[6]}
                    userName={userName[6]} 
                    groupName={groupName[2]}
                    textPost="As melhores trilhas - é disso que eu gosto 🏃🏻" 
                    coverPost={userPostImage[6]}
                    imgLikedUser1={userImageProfile[3]}
                    imgLikedUser2={userImageProfile[5]}
                    imgLikedUser3={userImageProfile[0]} 
                    postDate="3 meses atrás"
                    commentsNumber="1 comentário"
                    comment={<Comments 
                      userImg={userImageProfile[5]} 
                      userName={userName[5]} 
                      postDate="3 meses atrás" 
                      textComment="Que visão hein... Lugar Top!!!"  
                    />}
                  />
                  <NewFriendNotice 
                    imgProfile={userImageProfile[5]} 
                    userName={userName[5]}
                    friend={userName[2]} 
                    imgUserCover={userImageCover[2]}
                    imgFriendsProfile={userImageProfile[2]}
                    postDate="3 meses atrás" 
                  />
              </FeedPost>
              <Aside />
            </div>
         </Container>
    );
}

export default FeedContainer;