import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { 
  Container, 
  MenuList, 
  UserContent, 
  UserHeader, 
  UserMenu, 
  UserMenuList, 
  UserSidebar 
} from "./styles";
import PublicIcon from '@mui/icons-material/Public';
import InfoIcon from '@mui/icons-material/Info';
import GradingIcon from '@mui/icons-material/Grading';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import CommentIcon from '@mui/icons-material/Comment';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import ReviewsIcon from '@mui/icons-material/Reviews';

const User1 = () => {

  const { user } = useContext(UserContext)

  const userName = user.map(user => user.name)

  return (
    <Container style={{marginTop:'70px'}}>
      <UserHeader>
        HEADER
      </UserHeader>
      <UserMenu>
        <UserMenuList>
          <MenuList>
            <li><PublicIcon className="user-menu-icon" /><span>Visão Geral</span></li>
            <li><InfoIcon className="user-menu-icon" /><span>Sobre</span></li>
            <li><GradingIcon className="user-menu-icon" /><span>Atividade</span></li>
            <li><DynamicFeedIcon className="user-menu-icon" /><span>Posts</span></li>
            <li><CommentIcon className="user-menu-icon" /><span>Comentários</span></li>
            <li><PeopleOutlineIcon className="user-menu-icon" /><span>Amizades</span></li>
            <li><GroupsIcon className="user-menu-icon" /><span>Grupos</span></li>
            <li><ReviewsIcon className="user-menu-icon" /><span>Avaliações</span></li>
          </MenuList>
        </UserMenuList>
      </UserMenu>
      <UserContent>
        Página de {userName[0]}
        <UserSidebar>
          Sidebar
        </UserSidebar>
      </UserContent>
    </Container>
  )
}

export default User1;