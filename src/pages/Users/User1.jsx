import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { 
  Container, 
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
          USER MENU
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