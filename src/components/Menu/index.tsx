import React from "react";
import { Link } from "react-router-dom"
import { Container } from "./styles";
import { MenuList } from "../MenuList";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import FeedIcon from '@mui/icons-material/Feed';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ForumIcon from '@mui/icons-material/Forum';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import  Logo  from "../_assets/img/logo.png";


const Menu = () => {

    return (
        <Container>
            <div className="logo-content">
                <Link to="/">
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
                </Link>
            </div>
            <MenuList className='primary-menu'>
                <ul className="list-menu">
                    <li><Link to="/"><FeedIcon className="menu-icons" /><span>Feed</span></Link></li>
                    <li><Link to="/membros"><PeopleAltIcon className="menu-icons" /><span>Membros</span></Link></li>
                    <li><Link to="/grupos"><GroupsIcon className="menu-icons" /><span>Grupos</span></Link></li>
                    <li><Link to="/"><PhotoLibraryIcon className="menu-icons" /><span>Fotos</span></Link></li>
                    <li><Link to="/"><HeadphonesIcon className="menu-icons" /><span>Músicas</span></Link></li>
                    <li><Link to="/"><VideoLibraryIcon className="menu-icons" /><span>Vídeos</span></Link></li>
                    <li><Link to="/"><EventNoteIcon className="menu-icons" /><span>Eventos</span></Link></li>
                    <li><Link to="/"><ForumIcon className="menu-icons" /><span>Fórum</span></Link></li>
                    <li><Link to="/"><ShoppingBagIcon className="menu-icons" /><span>Loja</span></Link></li>
                </ul>  
            </MenuList>
        </Container>
    )
}

export default Menu;