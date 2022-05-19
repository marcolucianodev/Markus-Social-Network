import React, { useState } from "react";
import { Container } from "./styles";
import { Button } from "../Button";
import { MenuList } from "../MenuList";
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

const Menu = () => {

    const [activeMenu, setActiveMenu] = useState(false); 

    const openMenu = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <Container>
            <Button onClick={openMenu}>
                {activeMenu ? <CloseIcon className="icon-main-menu" /> : <MenuOpenIcon className="icon-main-menu" />}
            </Button>
            <MenuList className={activeMenu ? 'secondary-menu' : 'primary-menu'}>
                <ul className="list-menu">
                    <li><a href="#"><FeedIcon className="menu-icons" /><span>Feed</span></a></li>
                    <li><a href="#"><GradingIcon className="menu-icons" /><span>Atividade</span></a></li>
                    <li><a href="#"><PeopleAltIcon className="menu-icons" /><span>Membros</span></a></li>
                    <li><a href="#"><GroupsIcon className="menu-icons" /><span>Grupos</span></a></li>
                    <li><a href="#"><PhotoLibraryIcon className="menu-icons" /><span>Fotos</span></a></li>
                    <li><a href="#"><HeadphonesIcon className="menu-icons" /><span>Músicas</span></a></li>
                    <li><a href="#"><VideoLibraryIcon className="menu-icons" /><span>Vídeos</span></a></li>
                    <li><a href="#"><EventNoteIcon className="menu-icons" /><span>Eventos</span></a></li>
                    <li><a href="#"><ForumIcon className="menu-icons" /><span>Fórum</span></a></li>
                    <li><a href="#"><ShoppingBagIcon className="menu-icons" /><span>Loja</span></a></li>
                </ul>  
            </MenuList>
        </Container>
    )
}

export default Menu;