import React, { useState } from "react";
import { Container, Buttom } from "../SearchActivity/styles";
import PublicIcon from '@mui/icons-material/Public';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import FormSearch from "../FormSearch"




export const SearchActivity = () => {

    const [openSettings, setOpenSettings] = useState(false);

    const [openSearch, setOpenSearch] = useState(false);

    const [selectOption, setSelectOption] = useState(false);


    const openActivitySettings = () => {
        setOpenSettings(!openSettings)
    }
    
    const openActivitySearch = () => {
        setOpenSearch(!openSearch)
    }

    const handleActiveSelect = () => {
        setSelectOption(!selectOption)
    }

    return (
        <Container>
            <div className="display-menbers-number">
                <PublicIcon />
                <span>Total de Usuários</span>
                <span className="number-of-members">7</span>
            </div>
            <div className="activity-buttons">
                <Buttom bgButton="#7c5ac2"  sizeButton="2.5rem" onClick={openActivitySettings}>
                    <TuneIcon />
                </Buttom>
                <Buttom bgButton="#38a9ff" sizeButton="2.5rem" onClick={openActivitySearch}>
                    <SearchIcon />
                </Buttom>
                {/*Activity Buttons Options*/}
                <div className={openSettings ? 'activity-options' : 'activity-options-close'}>
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
                <div className={openSearch ? 'activity-options' : 'activity-options-close'}>
                    <FormSearch activityInput>
                    <div className="activity-input-area">
                        <input type="text" name="search" id="form-search" placeholder="Procurar Atividades..."/>
                    </div>
                    <button className="search-button">
                        <SearchIcon className="icon-search"/>
                    </button>
                    </FormSearch>
                </div>
            </div>
        </Container>
    );
}