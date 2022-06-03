// <<<<<<< HEAD
// import React, { useState } from "react";
// =======
import React from "react";
// >>>>>>> members-page
import { Link } from "react-router-dom"
import { Container } from "./styles";
// import { Button } from "../Button";
import { MenuList } from "../MenuList";
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';
// import CloseIcon from '@mui/icons-material/Close';
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
import  Logo  from "../_assets/img/logo.png";


const Menu = () => {

    // const [activeMenu, setActiveMenu] = useState(false); 

    // const openMenu = () => {
    //     setActiveMenu(!activeMenu)
    // }

    return (
        <Container>
            {/* <Button onClick={openMenu}>
                {activeMenu ? <CloseIcon className="icon-main-menu" /> : <MenuOpenIcon className="icon-main-menu" />}
            </Button> */}
            <div className="logo-content">
                <a href="/">
                    <div className="logo">
                        <img src={Logo} alt="Logo Markus" />
                        <div className="title-box">
                            <div className="title-logo">
                                <h2>Markus</h2>
                            </div>
                            <div className="desc-logo">
                                <h3>Social Network</h3>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            {/* <MenuList className={activeMenu ? 'secondary-menu' : 'primary-menu'}> */}
            <MenuList className='primary-menu'>
                <ul className="list-menu">
                    <li><Link to="/"><FeedIcon className="menu-icons" /><span>Feed</span></Link></li>
{/* <<<<<<< HEAD
                    <li><a href="#"><GradingIcon className="menu-icons" /><span>Atividade</span></a></li>
                    <li><Link to="/membros"><PeopleAltIcon className="menu-icons" /><span>Membros</span></Link></li>
                    <li><a href="#"><GroupsIcon className="menu-icons" /><span>Grupos</span></a></li>
                    <li><a href="#"><PhotoLibraryIcon className="menu-icons" /><span>Fotos</span></a></li>
                    <li><a href="#"><HeadphonesIcon className="menu-icons" /><span>Músicas</span></a></li>
                    <li><a href="#"><VideoLibraryIcon className="menu-icons" /><span>Vídeos</span></a></li>
                    <li><a href="#"><EventNoteIcon className="menu-icons" /><span>Eventos</span></a></li>
                    <li><a href="#"><ForumIcon className="menu-icons" /><span>Fórum</span></a></li>
                    <li><a href="#"><ShoppingBagIcon className="menu-icons" /><span>Loja</span></a></li>
======= */}
                    <li><a href="/"><GradingIcon className="menu-icons" /><span>Atividade</span></a></li>
                    <li><Link to="/membros"><PeopleAltIcon className="menu-icons" /><span>Membros</span></Link></li>
                    <li><a href="/"><GroupsIcon className="menu-icons" /><span>Grupos</span></a></li>
                    <li><a href="/"><PhotoLibraryIcon className="menu-icons" /><span>Fotos</span></a></li>
                    <li><a href="/"><HeadphonesIcon className="menu-icons" /><span>Músicas</span></a></li>
                    <li><a href="/"><VideoLibraryIcon className="menu-icons" /><span>Vídeos</span></a></li>
                    <li><a href="/"><EventNoteIcon className="menu-icons" /><span>Eventos</span></a></li>
                    <li><a href="/"><ForumIcon className="menu-icons" /><span>Fórum</span></a></li>
                    <li><a href="/"><ShoppingBagIcon className="menu-icons" /><span>Loja</span></a></li>
{/* >>>>>>> members-page */}
                </ul>  
            </MenuList>
        </Container>
    )
}

export default Menu;