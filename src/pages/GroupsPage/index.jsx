import React from "react";
import MainBanner from "../../components/MainBanner";
import { ImageUpperBanner, MaskBanner } from "../../components/MainBanner/styles";
import { MainPagesContainer } from "../../components/MainPagesContainer/styles";
import GroupsUpperBanner from "../../components/_assets/img/groups-upper-banner.png"

export const GroupsPage = () => {
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
        ...
      </MainPagesContainer>
    </div>
  )
}

export default GroupsPage;