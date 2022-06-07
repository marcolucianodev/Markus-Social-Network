import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainBanner from "../../components/MainBanner";
import { MainPagesContainer } from "../../components/MainPagesContainer/styles";
import { OptionsBar } from "../../components/OptionsBar/styles";
import PublicIcon from '@mui/icons-material/Public';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import { SearchActivityMobile, BoxActivityMobile } from "../../components/SearchActivityMobile";
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
import { ImageUpperBanner } from "../../components/MainBanner/styles";
import MembersUpperBanner from "../../components/_assets/img/members-upper-banner.png"
import { PagesContainer } from "../../components/PagesContainer";


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
                pageDescription="Dê uma olhada em todos os membros registrados no Markus! Encontre todos os seus amigos aqui ou faça novos. Pesquise-os facilmente por nome e gerencie-os rapidamente em ordem alfabética ou por data de registro!"
            >
                {/* <MaskBanner /> */}
                <ImageUpperBanner>
                    <img src={MembersUpperBanner} alt="Members Upper Banner" />
                </ImageUpperBanner>
            </MainBanner>
            <MainPagesContainer>
                <OptionsBar>
                    <div className="options_bar-info">
                        <Link to="/membros">
                            <div className="display-options_bar-number">
                                <PublicIcon />
                                <span>Total de Usuários</span>
                                <span className="options_bar-number">7</span>
                            </div>
                        </Link>
                    </div>
                    <div className="options_bar-search-content">
                        <div className="options_bar-activity">
                            <span className="order-by">Ordenar por:</span>
                            <div className="options_bar-select" onClick={handleActiveMembers}>
                                <div className="options_bar-select-headline">
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
                        <div className="options_bar-search">
                            <form action="post">
                                <label htmlFor="search-options_bar">
                                    <input type="text" name="search-options_bar" id="search-options_bar" placeholder="Pesquisar Membros" />
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
                    <OptionsBar className={filterMobile ? "show-filter-options_bar-mobile" : "show-filter-options_bar-mobile-none"}>
                        <div className="options_bar-search-content">
                            <div className="options_bar-activity">
                                <span className="order-by">Ordenar por:</span>
                                <div className="options_bar-select" onClick={handleActiveMembers}>
                                    <div className="options_bar-select-headline">
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
                    <OptionsBar className={searchMobile ? "show-search-options_bar-mobile" : "show-search-options_bar-mobile-none"}>
                        <div className="options_bar-search-content">
                            <div className="options_bar-search">
                                <form action="post">
                                    <label htmlFor="search-options_bar">
                                        <input type="text" name="search-options_bar" id="search-options_bar" placeholder="Pesquisar Membros..." />
                                    </label>
                                    <input type="submit" value="Pesquisar" />
                                </form>
                            </div>
                        </div>
                    </OptionsBar>
                </div>
                
                <PagesContainer>
                    <MembersCard
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
                </PagesContainer>
                <CounterViews counterNumber="7" counterType="membros ativos" />

            </MainPagesContainer>
        </div>
    );
}

export default MembersPage;