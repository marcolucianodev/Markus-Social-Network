import React from "react";
import { Container } from "./styles";
import upBanner from "../_assets/img/up-main-banner.png"

const MainBanner = () => {
    return (
        <Container>
            <div className="desc-banner">
                <h1>Feed de Notícias</h1>
                <p>Bem-vindo à página do feed de notícias do Markus! Aqui você encontrará tudo de novo em sua rede social, desde os próximos eventos,atualizações de atividades, novos membros, grupos, tópicos e postagens do fórum e muito mais informações!</p>
                <h3>Markus Social Network</h3>
          </div>
          <div className="img-up-banner-area">
            <img
              className="up-banner"
              src={upBanner} 
              alt="UpBanner" />
          </div>
        </Container>
    );
}

export default MainBanner;