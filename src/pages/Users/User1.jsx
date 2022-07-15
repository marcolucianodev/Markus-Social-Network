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
} from "./styles"

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
            <li>Visão Geral</li>
            <li>Sobre</li>
            <li>Atividade</li>
            <li>Posts</li>
            <li>Comentários</li>
            <li>Amizades</li>
            <li>Grupos</li>
            <li>Avaliações</li>
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