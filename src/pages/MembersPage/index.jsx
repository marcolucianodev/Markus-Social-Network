import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainBanner from "../../components/MainBanner";
import { MainPagesContainer } from "../../components/MainPagesContainer/styles";
import { OptionsBar } from "../../components/OptionsBar/styles";
import PublicIcon from '@mui/icons-material/Public';


const MembersPage = ({props}) => {

    const [activeMembers, setActiveMembers] = useState(false);

    const handleActiveMembers = () => {
        setActiveMembers(!activeMembers)
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
            </MainPagesContainer>
        </div>
    );
}

export default MembersPage;