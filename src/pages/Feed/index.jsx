// <<<<<<< HEAD
// // <<<<<<< HEAD
// // import React from "react";
// // import FeedContainer from "../../components/FeedContainer"
// // =======
// =======
// >>>>>>> members-page
import React from "react";
import FeedContainer from "../../components/FeedContainer";
import MainBanner from "../../components/MainBanner";

const Feed = ({props}) => {
    return (
        <div>
            <MainBanner 
                titlePage="Feed de Notícias" 
                pageDescription="Bem-vindo à página do feed de notícias do Markus! Aqui você encontrará tudo de novo em sua rede social, desde os próximos eventos,atualizações de atividades, novos membros, grupos, tópicos e postagens do fórum e muito mais informações!"
            />
            <FeedContainer />
        </div>
    );
}

export default Feed;