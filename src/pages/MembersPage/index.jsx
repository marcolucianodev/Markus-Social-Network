import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainBanner from "../../components/MainBanner";
import { MainPagesContainer } from "../../components/MainPagesContainer/styles";
import { OptionsBar } from "../../components/OptionsBar/styles";
import PublicIcon from '@mui/icons-material/Public';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import { SearchActivityMobile, BoxActivityMobile } from "../../components/SearchActivityMobile";
import { MembersContainer, MembersContent } from "../../components/MembersContent";


const MembersPage = ({props}) => {

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
                            {/* <div className="search-members">
                                <form action="post">
                                    <label htmlFor="members-search">
                                        <input type="text" name="members-search" id="members-search" placeholder="Pesquisar Membros" />
                                    </label>
                                    <input type="submit" value="Pesquisar" />
                                </form>
                            </div> */}
                        </div>
                    </OptionsBar>
                    <OptionsBar className={searchMobile ? "show-search-members-mobile" : "show-search-members-mobile-none"}>
                        <div className="members-page-options-search-content">
                            {/* <div className="activity-members">
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
                            </div> */}
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
                    <MembersContainer>
                        <div className="member-cover-image">
                            ...
                        </div>
                        <div className="member-profile-image">
                            ...
                        </div>
                        <div className="member-info">
                            <div className="info-user-name">
                                name
                            </div>
                            <div className="info-user-nickname">
                                nickname
                            </div>
                            <div className="info-user-badges">
                                <ul className="badges-list">
                                    <li>nova amizade</li>
                                    <li>convidar para grupo</li>
                                    <li>enviar mensagem</li>
                                </ul>
                            </div>
                            <div className="info-user-ratings-datails">
                                <div className="user-stars">
                                    stars
                                </div>
                                <div className="user-rate">
                                    rate
                                </div>
                                <div className="user-total-rate">
                                    total rate
                                </div>
                            </div>
                        </div>
                        <div className="member-statistics">
                            <ul className="list-user-statistics">
                                <li>Posts</li>
                                <li>Comentários</li>
                                <li>Vizualizações</li>
                                <li>Amigos</li>
                            </ul>
                        </div>
                    </MembersContainer>
                </MembersContent>

            </MainPagesContainer>
        </div>
    );
}

export default MembersPage;