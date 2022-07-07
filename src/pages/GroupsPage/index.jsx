import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import MainBanner from "../../components/MainBanner";
import { ImageUpperBanner, MaskBanner } from "../../components/MainBanner/styles";
import { MainPagesContainer } from "../../components/MainPagesContainer/styles";
import { OptionsBar } from "../../components/OptionsBar/styles";
import GroupsUpperBanner from "../../components/_assets/img/groups-upper-banner.png";
import PublicIcon from '@mui/icons-material/Public';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import { SearchActivityMobile, BoxActivityMobile } from "../../components/SearchActivityMobile";
import CounterViews from "../../components/CounterViews";
import { PagesContainer } from "../../components/PagesContainer";
import GroupsCard from "../../components/GroupsCard";
import CoverGroup1 from "../../components/_assets/img/cover-destinos-turisticos.jpeg";
import CoverGroup2 from "../../components/_assets/img/cover-clube-da-leitura.jpeg";
import CoverGroup3 from "../../components/_assets/img/cover-rotas-de-trilhas.jpeg";
import CoverGroup4 from "../../components/_assets/img/cover-portal-de-musicas.jpeg";
import CoverGroup5 from "../../components/_assets/img/cover-ideias-de-webdesign.jpeg";
import CoverGroup6 from "../../components/_assets/img/cover-melhores-series.jpg";
import ImgGroup1 from "../../components/_assets/img/destinos-turisticos.jpg";
import ImgGroup2 from "../../components/_assets/img/clube-da-leitura.jpg";
import ImgGroup3 from "../../components/_assets/img/rotas-de-trilhas.jpg";
import ImgGroup4 from "../../components/_assets/img/portal-de-musicas.jpg";
import ImgGroup5 from "../../components/_assets/img/ideias-de-webdesign.jpg";
import ImgGroup6 from "../../components/_assets/img/series.jpg";

import { GroupContext } from "../../contexts/groupContext";



export const GroupsPage = () => {

  const [activeGroups, setActiveGroups] = useState(false);
  const [filterMobile, setFilterMobile] = useState(false);
  const [searchMobile, setSearchMobile] = useState(false);

  const handleActiveGroups = () => {
    setActiveGroups(!activeGroups)
  }

  const openActivitySearchMobile = () => {
    setSearchMobile(!searchMobile)
  }

  const openActivityFilterMobile = () => {
      setFilterMobile(!filterMobile)
  }

  const {group} = useContext(GroupContext)

  return (
    <div>
      <MainBanner
        titlePage="Grupos" 
        pageDescription="Bem-vindos aos grupos do Markus! Aqui é o lugar onde você e seus amigos podem conversar sobre as coisas que vocês gostam, como esportes, filmes, músicas e muito mais!" 
      >
        <MaskBanner />
        <ImageUpperBanner>
          <img src={GroupsUpperBanner} alt="Groups Upper Banner" />
        </ImageUpperBanner>
      </MainBanner>
      <MainPagesContainer>
        <OptionsBar>
          <div className="options_bar-info">
              <Link to="/grupos">
                  <div className="display-options_bar-number">
                      <PublicIcon />
                      <span>Total de Grupos</span>
                      <span className="options_bar-number">{group.length}</span>
                  </div>
              </Link>
          </div>
          <div className="options_bar-search-content">
              <div className="options_bar-activity">
                  <span className="order-by">Ordenar por:</span>
                  <div className="options_bar-select" onClick={handleActiveGroups}>
                      <div className="options_bar-select-headline">
                          <span className="select-headline-text">Últimas Atividades</span>
                          <span className={activeGroups ? "select-headline-icon" : "select-headline-icon-active"} >‹</span>
                      </div>
                      <ul className={activeGroups ? "list-options" : "list-options-none"}>
                          <li>Últimas Atividades</li>
                          <li>Mais Popular</li>
                          <li>Mais Recente</li>
                          <li>Alfabético</li>
                      </ul>
                  </div>
              </div>
              <div className="options_bar-search">
                  <form action="post">
                      <label htmlFor="search-options_bar">
                          <input type="text" name="search-options_bar" id="search-options_bar" placeholder="Pesquisar Grupos" />
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
                        <div className="options_bar-select" onClick={handleActiveGroups}>
                            <div className="options_bar-select-headline">
                                <span className="select-headline-text">Últimas Atividades</span>
                                <span className={activeGroups ? "select-headline-icon" : "select-headline-icon-active"} >‹</span>
                            </div>
                            <ul className={activeGroups ? "list-options" : "list-options-none"}>
                              <li>Últimas Atividades</li>
                              <li>Mais Popular</li>
                              <li>Mais Recente</li>
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
                                <input type="text" name="search-options_bar" id="search-options_bar" placeholder="Pesquisar Grupos..." />
                            </label>
                            <input type="submit" value="Pesquisar" />
                        </form>
                    </div>
                </div>
            </OptionsBar>
        </div>

        <PagesContainer>
            {/* <GroupsCard 
            GroupCoverImg={CoverGroup1} 
            GroupProfileImg={ImgGroup1} 
            GroupName="Destinos Turísticos" 
            GroupSpecification="Grupo Público" 
            />
            <GroupsCard 
            GroupCoverImg={CoverGroup2} 
            GroupProfileImg={ImgGroup2} 
            GroupName="Clube da Leitura" 
            GroupSpecification="Grupo Privado" 
            PrivateGroup
            />
            <GroupsCard 
            GroupCoverImg={CoverGroup3} 
            GroupProfileImg={ImgGroup3} 
            GroupName="Rotas de Trilhas" 
            GroupSpecification="Grupo Público" 
            />
            <GroupsCard 
            GroupCoverImg={CoverGroup4} 
            GroupProfileImg={ImgGroup4} 
            GroupName="Portal de Músicas" 
            GroupSpecification="Grupo Privado" 
            PrivateGroup
            />
            <GroupsCard 
            GroupCoverImg={CoverGroup5} 
            GroupProfileImg={ImgGroup5} 
            GroupName="Idéias de Web Design" 
            GroupSpecification="Grupo Privado" 
            PrivateGroup
            />
            <GroupsCard 
            GroupCoverImg={CoverGroup6} 
            GroupProfileImg={ImgGroup6} 
            GroupName="Melhores Séries" 
            GroupSpecification="Grupo Público" 
            /> */}
            {group.map((group) => {
                return (
                    <GroupsCard 
                        GroupCoverImg={group.image_cover}
                        GroupProfileImg={group.image_group}
                        GroupName={group.name}
                        GroupType={group.group_type}
                        PrivateGroup={group.private}
                    />
                )
            })}
        </PagesContainer>
 
        <CounterViews counterNumber={group.length} counterType="grupos" />
      </MainPagesContainer>
    </div>
  )
}

export default GroupsPage;