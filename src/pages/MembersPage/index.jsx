import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainBanner from "../../components/MainBanner";
import { MainPagesContainer } from "../../components/MainPagesContainer/styles";
import { OptionsBar } from "../../components/OptionsBar/styles";
import PublicIcon from '@mui/icons-material/Public';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import { SearchActivityMobile, BoxActivityMobile } from "../../components/SearchActivityMobile";
import { MembersContent } from "../../components/MembersContent";
// <<<<<<< HEAD
// // import friendshipImage from "../../components/_assets/img/amizade.png";
// // import newGroupImage from "../../components/_assets/img/novo-grupo.png";
// // import sendMessage from "../../components/_assets/img/nova-mensagem.png";
// // import PostAddIcon from '@mui/icons-material/PostAdd';
// // import CommentIcon from '@mui/icons-material/Comment';
// // import VisibilityIcon from '@mui/icons-material/Visibility';
// // import MoodIcon from '@mui/icons-material/Mood';
// import ImgUser1 from "../../components/_assets/img/user-1.jpg"
// import MembersCard from "../../components/MembersCard";
// import CoverUser1 from "../../components/_assets/img/user-cover3.jpg"
// =======
import ImgUser1 from "../../components/_assets/img/user-1.jpg";
import ImgUser2 from "../../components/_assets/img/user-2.jpg";
import ImgUser3 from "../../components/_assets/img/user-3.jpg";
import ImgUser4 from "../../components/_assets/img/user-4.jpg";
import ImgUser5 from "../../components/_assets/img/user-5.jpg";
import ImgUser6 from "../../components/_assets/img/user-6.jpg";
import ImgUser7 from "../../components/_assets/img/user-7.jpg";
import MembersCard from "../../components/MembersCard";
import CoverUser1 from "../../components/_assets/img/user-cover.jpg";
import CoverUser3 from "../../components/_assets/img/user-cover3.jpg";
import CoverUser2 from "../../components/_assets/img/user-cover2.png";
import CoverUser4 from "../../components/_assets/img/user-cover4.jpeg";
import CoverUser5 from "../../components/_assets/img/user-cover5.jpg";
import CoverUser6 from "../../components/_assets/img/user-cover6.jpeg";
import CoverUser7 from "../../components/_assets/img/user-cover7.jpeg";
import CounterViews from "../../components/CounterViews";
// >>>>>>> members-page


const MembersPage = () => {

    const [activeMembers, setActiveMembers] = useState(false);

    const [filterMobile, setFilterMobile] = useState(false);

    const [searchMobile, setSearchMobile] = useState(false);
    

    const handleActiveMembers = () => {
        setActiveMembers(!activeMembers)
    }

    const openActivitySearchMobile = () => {
        setSearchMobile(!searchMobile)
    }

    const openActivityFilterMobile = () => {
        setFilterMobile(!filterMobile)
    }

    return (
        <div>
            <MainBanner
                titlePage="Membros" 
                pageDescription="EDITAR"
                bgPropsBanner="../../_assets/img/background-banner.jpg"
            />
            <MainPagesContainer>
                <OptionsBar>
                    <div className="members-user-info">
                        <Link to="/membros">
                            <div className="display-menbers-number">
                                <PublicIcon />
                                <span>Total de Usuários</span>
                                <span className="number-of-members">7</span>
                            </div>
                        </Link>
                    </div>
                    <div className="members-page-options-search-content">
                        <div className="activity-members">
                            <span className="order-by">Ordenar por:</span>
                            <div className="members-select" onClick={handleActiveMembers}>
                                <div className="mebers-select-headline">
                                    <span className="select-headline-text">Últimas Atividades</span>
                                    <span className={activeMembers ? "select-headline-icon" : "select-headline-icon-active"} >‹</span>
                                </div>
                                <ul className={activeMembers ? "list-options" : "list-options-none"}>
                                    <li>Últimas Atividades</li>
                                    <li>Registro Recente</li>
                                    <li>Alfabético</li>
                                </ul>
                            </div>
                        </div>
                        <div className="search-members">
                            <form action="post">
                                <label htmlFor="members-search">
                                    <input type="text" name="members-search" id="members-search" placeholder="Pesquisar Membros" />
                                </label>
                                <input type="submit" value="Pesquisar" />
                            </form>
                        </div>
                    </div>
                </OptionsBar>

                {/*Here is the Options Bar Mobile*/}

                <div className="activity-members-mobile">
                    <div className="feed-content-search-activity-mobile">
                        <SearchActivityMobile>
                            <BoxActivityMobile onClick={openActivityFilterMobile}>
                                <TuneIcon />
                                <p>Filtrar</p>
                            </BoxActivityMobile>
                            <BoxActivityMobile onClick={openActivitySearchMobile}>
                                <SearchIcon />
                                <p>Pesquisar</p>
                            </BoxActivityMobile>
                        </SearchActivityMobile>
                    </div>
                    <OptionsBar className={filterMobile ? "show-filter-members-mobile" : "show-filter-members-mobile-none"}>
                        <div className="members-page-options-search-content">
                            <div className="activity-members">
                                <span className="order-by">Ordenar por:</span>
                                <div className="members-select" onClick={handleActiveMembers}>
                                    <div className="mebers-select-headline">
                                        <span className="select-headline-text">Últimas Atividades</span>
                                        <span className={activeMembers ? "select-headline-icon" : "select-headline-icon-active"} >‹</span>
                                    </div>
                                    <ul className={activeMembers ? "list-options" : "list-options-none"}>
                                        <li>Últimas Atividades</li>
                                        <li>Registro Recente</li>
                                        <li>Alfabético</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </OptionsBar>
                    <OptionsBar className={searchMobile ? "show-search-members-mobile" : "show-search-members-mobile-none"}>
                        <div className="members-page-options-search-content">
                            <div className="search-members">
                                <form action="post">
                                    <label htmlFor="members-search">
                                        <input type="text" name="members-search" id="members-search" placeholder="Pesquisar Membros..." />
                                    </label>
                                    <input type="submit" value="Pesquisar" />
                                </form>
                            </div>
                        </div>
                    </OptionsBar>
                </div>

                <MembersContent>
                    <MembersCard
// <<<<<<< HEAD
//                         MemberCoverImg={CoverUser1} 
//                         MemberProfileImg={ImgUser1} 
//                         UserName="User1" 
//                         UserNickName="@user1"
//                     />
//                     <MembersCard
//                         // MemberCoverImg={CoverUser1} 
//                         MemberProfileImg={ImgUser1}
//                     />
//                     <MembersCard
//                         // MemberCoverImg={CoverUser1} 
//                         MemberProfileImg={ImgUser1}
//                     />
//                 </MembersContent>
// =======
                        MemberCoverImg={CoverUser3} 
                        MemberProfileImg={ImgUser1} 
                        UserName="Carlos" 
                        UserNickName="@carlos" 
                        userRate="4.6" 
                        totalRatings="3"
                    />
                    <MembersCard
                        MemberCoverImg={CoverUser4} 
                        MemberProfileImg={ImgUser7}
                        UserName="Daniel" 
                        UserNickName="@daniel" 
                        userRate="4.5" 
                        totalRatings="2"
                    />
                    <MembersCard
                        MemberCoverImg={CoverUser2} 
                        MemberProfileImg={ImgUser3} 
                        UserName="Michelle" 
                        UserNickName="@michelle" 
                        userRate="4.3" 
                        totalRatings="3"
                    />
                    <MembersCard
                        MemberCoverImg={CoverUser1} 
                        MemberProfileImg={ImgUser2} 
                        UserName="Thalles" 
                        UserNickName="@thalles" 
                        userRate="5" 
                        totalRatings="2"
                    />
                    <MembersCard
                        MemberCoverImg={CoverUser5} 
                        MemberProfileImg={ImgUser6} 
                        UserName="Cíntia" 
                        UserNickName="@cintia" 
                        userRate="4" 
                        totalRatings="2"
                    />
                    <MembersCard
                        MemberCoverImg={CoverUser6} 
                        MemberProfileImg={ImgUser4} 
                        UserName="Antônio" 
                        UserNickName="@antonio" 
                        userRate="4.5" 
                        totalRatings="2"
                    />
                    <MembersCard
                        MemberCoverImg={CoverUser7} 
                        MemberProfileImg={ImgUser5} 
                        UserName="Ricardo" 
                        UserNickName="@ricardo" 
                        userRate="4" 
                        totalRatings="2"
                    />
                </MembersContent>
                <CounterViews counterType="membros" />
{/* >>>>>>> members-page */}

            </MainPagesContainer>
        </div>
    );
}

export default MembersPage;