import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles"
import SearchHeader from "../SearchHeader";
import FormSearch from "../FormSearch";
import { Button, LoginButton } from "../Button";
import { MenuMobile } from "../MenuMobile";
import LoginIcon from '@mui/icons-material/Login';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import FeedIcon from '@mui/icons-material/Feed';
import GradingIcon from '@mui/icons-material/Grading';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ForumIcon from '@mui/icons-material/Forum';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


const Header = () => {

    const [activeMenu, setActiveMenu] = useState(false); 

    const [showLoginOver, setShowLoginOver] = useState(false);


    const openMenu = () => {
        setActiveMenu(!activeMenu)
     }

    const handleLoginOver = () => {
        setShowLoginOver(true)
      }
    
    const handleLoginOut = () => {
        setShowLoginOver(false)
    }

    return (
        <HeaderContainer>
            <Button onClick={openMenu} btnMobile btnDesktop="block">
                {activeMenu ? <CloseIcon className="icon-main-menu" /> : <MenuOpenIcon className="icon-main-menu" />}
            </Button>
            <SearchHeader>
               <FormSearch placeholderText="Procurar pessoas ou páginas..." />
            </SearchHeader>
            <Link to="/login">
                <LoginButton onMouseOver={handleLoginOver} onMouseOut={handleLoginOut} >
                    <LoginIcon className="icon-login" />
                    <span className={showLoginOver ?'show-login-ballon':'hide-login-ballon'}>Login / Registrar</span>
                </LoginButton>
            </Link>
            <MenuMobile className={activeMenu ? 'open-menu-mobile' : 'close-menu-mobile'}>
                <ul className="list-menu">
                    <li><Link to="/"><FeedIcon className="menu-icons" /><span>Feed</span></Link></li>
                    <li><Link to="/"><GradingIcon className="menu-icons" /><span>Atividade</span></Link></li>
                    <li><Link to="/membros"><PeopleAltIcon className="menu-icons" /><span>Membros</span></Link></li>
                    <li><Link to="/grupos"><GroupsIcon className="menu-icons" /><span>Grupos</span></Link></li>
                    <li><Link to="/"><PhotoLibraryIcon className="menu-icons" /><span>Fotos</span></Link></li>
                    <li><Link to="/"><HeadphonesIcon className="menu-icons" /><span>Músicas</span></Link></li>
                    <li><Link to="/"><VideoLibraryIcon className="menu-icons" /><span>Vídeos</span></Link></li>
                    <li><Link to="/"><EventNoteIcon className="menu-icons" /><span>Eventos</span></Link></li>
                    <li><Link to="/"><ForumIcon className="menu-icons" /><span>Fórum</span></Link></li>
                    <li><Link to="/"><ShoppingBagIcon className="menu-icons" /><span>Loja</span></Link></li>
                </ul>
            </MenuMobile>
        </HeaderContainer>
    );
}

export default Header;