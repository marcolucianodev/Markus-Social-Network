import React from "react";
import FeedContainer from "../../components/FeedContainer";
import MainBanner from "../../components/MainBanner";
// import FeedBanner from "../../components/_assets/img/background-social-network.jpg";
import { MaskBanner, ImageUpperBanner } from "../../components/MainBanner/styles";
import feedUpperBanner from "../../components/_assets/img/up-main-banner.png"

const Feed = () => {
    return (
        <div>
            <MainBanner 
                titlePage="Feed de Notícias" 
                pageDescription="Bem-vindo à página do feed de notícias do Markus! Aqui você encontrará tudo de novo em sua rede social, desde os próximos eventos,atualizações de atividades, novos membros, grupos, tópicos e postagens do fórum e muito mais informações!"
            >
                {/* <MaskBanner /> */}
                <ImageUpperBanner>
                    <img src={feedUpperBanner} alt="Feer Upper Banner" />
                </ImageUpperBanner>
            </MainBanner>
            <FeedContainer />
        </div>
    );
}

export default Feed;